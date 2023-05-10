package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
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
import com.app.pojos.Users;
import com.app.services.BooksService;
import com.app.services.ManagerService;

@RestController
@RequestMapping("/api/manager")
@CrossOrigin(origins = "*")
public class ManagerController {

	@Autowired
	private ManagerService managerService;
	@Autowired
	private BooksService bookService;
	
	@GetMapping("/books")
	public List<Books> getBooks()
	{
		return bookService.getBooks();
	}
	
	@GetMapping("/books/{bookId}")
	public ResponseEntity<?> getBooks(@PathVariable int bookId)
	{
		System.out.println("in get books"+bookId);
		Books book = bookService.getBooks(bookId);
		
		if(book==null)
		{
			return new ResponseEntity<>("Invalid book id",HttpStatus.NOT_FOUND);
		}
		else
			return new ResponseEntity<>(book,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Users> storeManager(@RequestBody Users manager)
	{
		System.out.println("in post manager"+manager);
		return ResponseEntity.ok(managerService.registerManager(manager));
	}
	
	@PostMapping("/addBook")
	public Books addBook(@RequestBody Books book) 
	{
		System.out.println("in post books"+book);
		return bookService.addBook(book);
	}
	
	@PutMapping
	public ResponseEntity<Users> updateManagerDetails(@RequestBody Users manager)
	{
		System.out.println("in edit users"+manager);
		return ResponseEntity.ok(managerService.updateManager(manager));
	}
	
	
	
	@PutMapping("/updateBook")
	public Books updateBookDetails(@RequestBody Books book) 
	{
		System.out.println("in put books"+book);
		return bookService.updateBookDetails(book);
	}
	
	@PutMapping("/sold/{id}")
	public Books sold(@PathVariable int id) 
	{
		return bookService.soldBook(id);
	}
	
	@PutMapping("/purchase/{id}")
	public Books purchase(@PathVariable int id) 
	{
		return bookService.purchaseBook(id);
	}
	
	
	@DeleteMapping("/deleteBook/{bookId}")
	public String deleteBook(@PathVariable int bookId)
	{
		System.out.println("in delete books"+bookId);
		return bookService.deleteBook(bookId);
	}
	
	
//	@RequestMapping("/searchBook")
//	public String searchBook(@Param("keyword") String keyword, Model model) {
//		final List<Books> books = bookService.searchBooks(keyword);
//
//		model.addAttribute("books", books);
//		model.addAttribute("keyword", keyword);
//		return "list-books";
//	}
	
	
	
	
	
}
