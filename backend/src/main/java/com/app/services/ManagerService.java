package com.app.services;

import java.util.List;

import com.app.pojos.Books;
import com.app.pojos.Users;

public interface ManagerService {

	public Users registerManager(Users user);
	
	public Users updateManager(Users updatedUser);
	
//	public List<Books> getAllBooks();
//	
//	public Books addBook(Books book);
////	
//	public Books editBooks(Books books);
////	
//	public String deleteBook(int bookId);
}
