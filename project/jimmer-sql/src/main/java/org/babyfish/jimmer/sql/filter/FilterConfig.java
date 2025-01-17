package org.babyfish.jimmer.sql.filter;

import org.babyfish.jimmer.lang.OldChain;
import org.babyfish.jimmer.sql.filter.impl.FilterManager;

import java.util.Arrays;
import java.util.Collection;

public class FilterConfig {

    private FilterManager filterManager;

    public FilterConfig(FilterManager filterManager) {
        this.filterManager = filterManager;
    }

    @OldChain
    public FilterConfig enable(Filter<?>... filters) {
        this.filterManager = filterManager.enable(Arrays.asList(filters));
        return this;
    }

    @OldChain
    public FilterConfig enable(Collection<Filter<?>> filters) {
        this.filterManager = filterManager.enable(filters);
        return this;
    }

    @OldChain
    public FilterConfig disable(Filter<?>... filters) {
        this.filterManager = filterManager.disable(Arrays.asList(filters));
        return this;
    }

    @OldChain
    public FilterConfig disable(Collection<Filter<?>> filters) {
        this.filterManager = filterManager.disable(filters);
        return this;
    }

    @OldChain
    public FilterConfig enableByTypes(Class<?>... filterTypes) {
        this.filterManager = filterManager.enableByTypes(Arrays.asList(filterTypes));
        return this;
    }

    @OldChain
    public FilterConfig enableByTypes(Collection<Class<?>> filterTypes) {
        this.filterManager = filterManager.enableByTypes(filterTypes);
        return this;
    }

    @OldChain
    public FilterConfig disableByTypes(Class<?>... filterTypes) {
        this.filterManager = filterManager.disableByTypes(Arrays.asList(filterTypes));
        return this;
    }

    @OldChain
    public FilterConfig disableByTypes(Collection<Class<?>> filterTypes) {
        this.filterManager = filterManager.disableByTypes(filterTypes);
        return this;
    }

    @OldChain
    public FilterConfig disableAll() {
        this.filterManager = filterManager.disableAll();
        return this;
    }

    public FilterManager getFilterManager() {
        return filterManager;
    }
}
