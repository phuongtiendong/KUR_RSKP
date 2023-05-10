package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Books;
import com.app.services.BooksService;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*")
public class StoreController {

	@Autowired
	private BooksService bookService;
	
	public StoreController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@GetMapping
	public List<Books>getBooks(){
		System.out.println("in list books");
		return bookService.getBooks();
		
	}
	
	@GetMapping("/{bookId}")
	public Books getBooks(@PathVariable int bookId)
	{
		System.out.println("in get books"+bookId);
		return bookService.getBooks(bookId);
	}
	
	@PostMapping
	public Books addBook(@RequestBody Books book) 
	{
		System.out.println("in post books"+book);
		return bookService.addBook(book);
	}
	
	@PutMapping
	public Books updateBookDetails(@RequestBody Books book) 
	{
		System.out.println("in put books"+book);
		return bookService.updateBookDetails(book);
	}
	
	@DeleteMapping("/{bookId}")
	public String deleteBook(@PathVariable int bookId)
	{
		System.out.println("in delete books"+bookId);
		return bookService.deleteBook(bookId);
	}
	

	
	
	
}
