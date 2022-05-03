package org.babyfish.jimmer.example.core.model;

import org.babyfish.jimmer.Immutable;

import javax.validation.constraints.Null;
import javax.validation.constraints.Size;
import java.util.List;

@Immutable
public interface Book {

    @Size(max = 50)
    String name();

    @Null
    BookStore store();

    int price();

    List<Author> authors();
}
