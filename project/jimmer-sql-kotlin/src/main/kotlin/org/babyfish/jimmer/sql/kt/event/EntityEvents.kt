package org.babyfish.jimmer.sql.kt.event

import org.babyfish.jimmer.lang.Ref
import org.babyfish.jimmer.sql.event.EntityEvent
import org.babyfish.jimmer.sql.kt.toImmutableProp
import kotlin.reflect.KProperty1

fun <E: Any, R> EntityEvent<E>.getUnchangedFieldRef(prop: KProperty1<E, R>): Ref<R>? =
    getUnchangedFieldRef(prop.toImmutableProp().id)