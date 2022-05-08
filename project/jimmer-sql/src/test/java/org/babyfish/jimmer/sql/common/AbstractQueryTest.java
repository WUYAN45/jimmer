package org.babyfish.jimmer.sql.common;

import org.babyfish.jimmer.sql.ast.query.TypedRootQuery;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;

import java.util.List;
import java.util.function.Consumer;
import java.util.function.Supplier;

public class AbstractQueryTest extends AbstractTest {

    private List<?> rows;

    @BeforeAll
    public static void beforeAll() {
        jdbc(AbstractTest::initDatabase);
    }

    protected <R> void executeAndExpect(
            TypedRootQuery<R> query,
            Consumer<QueryTestContext<R>> block
    ) {
        clearExecutions();
        jdbc(con -> {
            rows = query.execute(con);
        });
        block.accept(new QueryTestContext<R>());
    }

    protected class QueryTestContext<R> {

        public void sql(String sql) {
            List<Execution> executions = getExecutions();
            Assertions.assertFalse(
                    executions.isEmpty(),
                    "Not sql history"
            );
            Assertions.assertEquals(
                    sql,
                    executions.get(executions.size() - 1).getSql()
            );
        }

        public void variables(List<Object> variables) {
            List<Execution> executions = getExecutions();
            Assertions.assertFalse(
                    executions.isEmpty(),
                    "Not sql history"
            );
            Assertions.assertEquals(
                    variables,
                    executions.get(executions.size() - 1).getVariables()
            );
        }

        @SuppressWarnings("unchecked")
        void rows(Consumer<List<R>> block) {
            Assertions.assertNotNull(
                    rows,
                    "rows is not recorded"
            );
            block.accept((List<R>) rows);
        }
    }
}