package org.babyfish.jimmer.spring.client;

import org.babyfish.jimmer.client.meta.Metadata;
import org.babyfish.jimmer.client.meta.Operation;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.jetbrains.annotations.Nullable;
import org.springframework.aop.support.AopUtils;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.boot.autoconfigure.AutoConfigurationPackages;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.ArrayList;
import java.util.List;

public class MetadataFactoryBean implements FactoryBean<Metadata> {

    private final ApplicationContext ctx;

    public MetadataFactoryBean(ApplicationContext ctx) {
        this.ctx = ctx;
    }

    @Override
    public Class<?> getObjectType() {
        return Metadata.class;
    }

    @Override
    public Metadata getObject() throws Exception {
        List<String> packageNames = AutoConfigurationPackages.get(ctx);
        List<Class<?>> serviceTypes = new ArrayList<>();
        for (Object bean : ctx.getBeansWithAnnotation(RestController.class).values()) {
            boolean shouldBeParsed = false;
            for (String packageName : packageNames) {
                if (bean.getClass().getName().startsWith(packageName + '.')) {
                    shouldBeParsed = true;
                    break;
                }
            }
            if (shouldBeParsed) {
                serviceTypes.add(AopUtils.getTargetClass(bean));
            }
        }
        return org.babyfish.jimmer.client.meta.Metadata
                .newBuilder()
                .addServiceTypes(serviceTypes)
                .setOperationParser(
                        annotatedElement -> {
                            if (annotatedElement instanceof Method) {
                                GetMapping getMapping = annotatedElement.getAnnotation(GetMapping.class);
                                if (getMapping != null) {
                                    return new Tuple2<>(text(getMapping.value(), getMapping.path()), Operation.HttpMethod.GET);
                                }
                                PostMapping postMapping = annotatedElement.getAnnotation(PostMapping.class);
                                if (postMapping != null) {
                                    return new Tuple2<>(text(postMapping.value(), postMapping.path()), Operation.HttpMethod.POST);
                                }
                                PutMapping putMapping = annotatedElement.getAnnotation(PutMapping.class);
                                if (putMapping != null) {
                                    return new Tuple2<>(text(putMapping.value(), putMapping.path()), Operation.HttpMethod.PUT);
                                }
                                DeleteMapping deleteMapping = annotatedElement.getAnnotation(DeleteMapping.class);
                                if (deleteMapping != null) {
                                    return new Tuple2<>(text(deleteMapping.value(), deleteMapping.path()), Operation.HttpMethod.DELETE);
                                }
                            }
                            RequestMapping requestMapping = annotatedElement.getAnnotation(RequestMapping.class);
                            if (requestMapping != null) {
                                return new Tuple2<>(text(requestMapping.value(), requestMapping.path()),
                                        requestMapping.method().length != 0 ?
                                                Operation.HttpMethod.valueOf(requestMapping.method()[0].name()) :
                                                null
                                );
                            }
                            return null;
                        }
                )
                .setParameterParser(
                        new org.babyfish.jimmer.client.meta.Metadata.ParameterParser() {
                            @Nullable
                            @Override
                            public Tuple2<String, Boolean> requestParamNameAndNullable(Parameter javaParameter) {
                                RequestParam requestParam = javaParameter.getAnnotation(RequestParam.class);
                                if (requestParam == null) {
                                    return null;
                                }
                                return new Tuple2<>(
                                        text(requestParam.value(), requestParam.name(), javaParameter.getName()),
                                        !requestParam.required()
                                );
                            }

                            @Nullable
                            @Override
                            public String pathVariableName(Parameter javaParameter) {
                                PathVariable pathVariable = javaParameter.getAnnotation(PathVariable.class);
                                if (pathVariable == null) {
                                    return null;
                                }
                                return text(pathVariable.value(), pathVariable.name(), javaParameter.getName());
                            }

                            @Override
                            public boolean isRequestBody(Parameter javaParameter) {
                                return javaParameter.isAnnotationPresent(RequestBody.class);
                            }
                        }
                )
                .build();
    }

    private static String text(String[] a, String[] b) {
        for (String value : a) {
            if (!value.isEmpty()) {
                return value;
            }
        }
        for (String path : b) {
            if (!path.isEmpty()) {
                return path;
            }
        }
        return null;
    }

    private static String text(String a, String b, String c) {
        if (!a.isEmpty()) {
            return a;
        }
        if (!b.isEmpty()) {
            return b;
        }
        return c;
    }
}
