package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excpetions.ResourceNotFoundException;
import com.app.dao.BooksDao;
import com.app.pojos.Books;

@Service
@Transactional
public class BookServiceImpl implements BooksService {
	
	@Autowired
	private BooksDao bookDao;
	@Override
	public List<Books> getBooks() {
		// TODO Auto-generated method stub
		return bookDao.findAll() ;
	}
	@Override
	public Books getBooks(int bookId) {
		// TODO Auto-generated method stub
		return bookDao.findById(bookId).orElseThrow
				(()-> new ResourceNotFoundException("Invalid book id !!!!!!" + bookId));
	}
	@Override
	public Books addBook(Books book) {
		// TODO Auto-generated method stub
		return bookDao.save(book);
	}
	@Override
	public String deleteBook(int bookId) {
		// TODO Auto-generated method stub
		String mesg = "Deletion of book details failed!!!!!!!!!!!";
		if(bookDao.existsById(bookId)) {
			bookDao.deleteById(bookId);
			mesg = "Book details deleted successfully , for book id :" + bookId;
		}
		return mesg;
	}
	@Override
	public Books updateBookDetails(Books book) {
		// TODO Auto-generated method stub
		return bookDao.save(book);
	}
//	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
//	@Override
//	public List<Books> searchBooks(String keyword) {
//		{
//			if (keyword != null) {
//				return bookDao.search(keyword);
//			}
//			return bookDao.findAll();
//		}
//	}
	@Override
	public Books soldBook(int bookId) {
		Books book = bookDao.getById(bookId);
		book.setAvailableQty(book.getAvailableQty()-1);
		return bookDao.save(book);
	}
	@Override
	public Books purchaseBook(int bookId) {
		Books book = bookDao.getById(bookId);
		book.setAvailableQty(book.getAvailableQty()+1);
		return bookDao.save(book);
	}

}
