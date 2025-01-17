package org.babyfish.jimmer.impl.converter;

import org.babyfish.jimmer.Draft;
import org.babyfish.jimmer.ImmutableConverter;
import org.babyfish.jimmer.impl.util.Classes;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TargetLevel;
import org.babyfish.jimmer.runtime.DraftSpi;
import org.babyfish.jimmer.runtime.Internal;
import org.jetbrains.annotations.NotNull;

import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.Collection;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

class ImmutableConverterImpl<Dynamic, Static> implements ImmutableConverter<Dynamic, Static> {

    private final ImmutableType immutableType;

    private final Class<Static> staticType;

    private final Collection<Field> fields;

    private final BiConsumer<Draft, Static> draftModifier;

    ImmutableConverterImpl(
            ImmutableType immutableType,
            Class<Static> staticType,
            Collection<Field> fields,
            BiConsumer<Draft, Static> draftModifier
    ) {
        this.immutableType = immutableType;
        this.staticType = staticType;
        this.fields = fields;
        this.draftModifier = draftModifier;
    }

    @SuppressWarnings("unchecked")
    @NotNull
    @Override
    public Dynamic convert(Static staticObj) {
        if (staticObj == null) {
            throw new IllegalArgumentException("staticObj cannot be null");
        }
        if (!(staticType.isAssignableFrom(staticObj.getClass()))) {
            throw new IllegalArgumentException(
                    "`staticObj` is not instance whose type is \"" + staticType.getName() + "\""
            );
        }
        return (Dynamic) Internal.produce(immutableType, null, draft -> {
            for (Field field : fields) {
                Predicate<Object> cond = (Predicate<Object>) field.cond;
                if (cond == null || cond.test(staticObj)) {
                    Object value = field.methodHandle.invoke(staticObj);
                    if (value == null) {
                        Supplier<?> defaultValueSupplier = field.defaultValueSupplier;
                        if (defaultValueSupplier != null) {
                            value = ((Supplier<Object>) defaultValueSupplier).get();
                        }
                    } else {
                        Function<?, ?> valueConverter = field.valueConverter;
                        if (valueConverter != null) {
                            value = ((Function<Object, Object>) valueConverter).apply(value);
                        }
                    }
                    ((DraftSpi) draft).__set(field.propId, value);
                }
            }
            if (draftModifier != null) {
                draftModifier.accept((Draft)draft, staticObj);
            }
        });
    }

    static class Field {

        final Predicate<?> cond;

        final int propId;

        final MethodHandle methodHandle;

        final Function<?, ?> valueConverter;

        final Supplier<?> defaultValueSupplier;

        private Field(
                Predicate<?> cond,
                ImmutableProp prop,
                MethodHandle methodHandle,
                Function<?, ?> valueConverter,
                Supplier<?> defaultValueSupplier
        ) {
            this.cond = cond;
            this.propId = prop.getId();
            this.methodHandle = methodHandle;
            this.valueConverter = valueConverter;
            this.defaultValueSupplier = defaultValueSupplier;
        }

        public static Field create(
                Predicate<?> cond,
                ImmutableProp prop,
                Method method,
                java.lang.reflect.Field field,
                Function<?, ?> valueConverter,
                Supplier<?> defaultValueSupplier,
                boolean autoMapping
        ) {
            Class<?> propType;
            boolean isList = prop.isScalarList() || prop.isReferenceList(TargetLevel.OBJECT);
            if (isList) {
                propType = List.class;
            } else {
                propType = prop.getElementClass();
            }
            if (valueConverter == null) {
                Class<?> staticPropType = method != null ? method.getReturnType() : field.getType();
                if (!Classes.matches(propType, staticPropType)) {
                    throw new IllegalArgumentException(
                            "Cannot " +
                                    (autoMapping ? " automatically " : "") +
                                    "map \"" +
                                    prop +
                                    "\" to \"" +
                                    method +
                                    "\" without value converter, the return type of jimmer property is \"" +
                                    propType.getName() +
                                    "\" but the return type of the method of static type is \"" +
                                    staticPropType.getName() +
                                    "\""
                    );
                }
                if (isList) {
                    Type type = method != null ? method.getGenericReturnType() : field.getGenericType();
                    if (!(type instanceof ParameterizedType)) {
                        throw new IllegalArgumentException(
                                "Cannot " +
                                        (autoMapping ? " automatically " : "") +
                                        "map \"" +
                                        prop +
                                        "\" to \"" +
                                        method +
                                        "\" without value converter, the jimmer property is list but the return type " +
                                        "of the method of static type is not generic type"
                        );
                    }
                    ParameterizedType parameterizedType = (ParameterizedType) type;
                    Type elementType = parameterizedType.getActualTypeArguments()[0];
                    if (!(elementType instanceof Class<?>) || !Classes.matches((Class<?>) elementType, prop.getElementClass())) {
                        throw new IllegalArgumentException(
                                "Cannot " +
                                        (autoMapping ? " automatically " : "") +
                                        "map \"" +
                                        prop +
                                        "\" to \"" +
                                        method +
                                        "\" without value converter, the list element type of jimmer property is \"" +
                                        prop.getElementClass().getName() +
                                        "\" but the list element of return type of the method of static type is \"" +
                                        elementType +
                                        "\""
                        );
                    }
                }
            }
            MethodHandle handle;
            try {
                handle = method != null ?
                        MethodHandles.lookup().unreflect(method) :
                        MethodHandles.lookup().unreflectGetter(field);
            } catch (IllegalAccessException ex) {
                throw new AssertionError("Internal bug: " + ex.getMessage(), ex);
            }
            return new Field(cond, prop, handle, valueConverter, defaultValueSupplier);
        }
    }
}
