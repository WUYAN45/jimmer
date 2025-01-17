package org.babyfish.jimmer.sql.example.bll;

import org.babyfish.jimmer.client.FetchBy;
import org.babyfish.jimmer.sql.example.dal.BookRepository;
import org.babyfish.jimmer.sql.example.model.*;
import org.babyfish.jimmer.sql.example.model.input.BookInput;
import org.babyfish.jimmer.sql.fetcher.Fetcher;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/books/simple")
    public Page<@FetchBy("SIMPLE_FETCHER") Book> findSimpleBooks(
            @RequestParam(defaultValue = "0") int pageIndex,
            @RequestParam(defaultValue = "5") int pageSize,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String storeName,
            @RequestParam(required = false) String authorName
    ) {
        return bookRepository.findBooks(
                pageIndex,
                pageSize,
                name,
                storeName,
                authorName,
                SIMPLE_FETCHER
        );
    }

    @GetMapping("/books/complex")
    public Page<@FetchBy("COMPLEX_FETCHER") Book> findComplexBooks(
            @RequestParam(defaultValue = "0") int pageIndex,
            @RequestParam(defaultValue = "5") int pageSize,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String storeName,
            @RequestParam(required = false) String authorName
    ) {
        return bookRepository.findBooks(
                pageIndex,
                pageSize,
                name,
                storeName,
                authorName,
                COMPLEX_FETCHER
        );
    }

    private static final Fetcher<Book> SIMPLE_FETCHER =
            BookFetcher.$.name();

    private static final Fetcher<Book> COMPLEX_FETCHER =
            BookFetcher.$
                    .allScalarFields()
                    .tenant(false)
                    .store(
                            BookStoreFetcher.$
                                    .allScalarFields()
                                    .avgPrice()
                    )
                    .authors(
                            AuthorFetcher.$
                                    .allScalarFields()
                    );

    /*
     * Recommend
     *
     * The save command can save arbitrarily complex data structures,
     * which is too powerful and should be sealed inside the service and not exposed.
     *
     * You should accept static Input DTO parameter, convert it to a
     * dynamic data structure and save it.
     * Unlike output DTOs, input DTOs don't have explosion issues.
     */
    @Transactional
    @PutMapping("/book")
    public Book saveBook(@RequestBody BookInput input) {
        return bookRepository.save(input);
    }

    /*
     * Not recommended.
     *
     * Since the save command can save arbitrarily complex data structure,
     * it is `too powerful`, and direct exposure will cause serious security problems,
     * unless your client is an internal system and absolutely reliable.
     */
    @Transactional
    @PutMapping("/book/dynamic")
    public Book saveBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }
}
