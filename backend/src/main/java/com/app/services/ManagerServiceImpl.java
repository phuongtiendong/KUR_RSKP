package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminDao;
import com.app.dao.BooksDao;
import com.app.dao.ManagerDao;
import com.app.pojos.Books;
import com.app.pojos.Users;

@Service
@Transactional
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	private ManagerDao managerDao;
		
	@Override
	public Users registerManager(Users user) {
		return managerDao.save(user);
	}

	@Override
	public Users updateManager(Users updatedUser) {
		return managerDao.save(updatedUser);
	}

//	@Override
//	public List<Books> getAllBooks() {
//		return booksDao.findAll();
//	}
//
//	@Override
//	public Books addBook(Books book) {
//		return managerDao.save(book);
//	}
//
//	@Override
//	public Books editBooks(Books book) {
//		return managerDao.save(book);
//		
//	}
//	
//	@Override
//	public String deleteBook(int bookId) {
//		// TODO Auto-generated method stub
//		String mesg = "Deletion of book details failed!!!!!!!!!!!";
//		if(booksDao.existsById(bookId)) {
//			booksDao.deleteById(bookId);
//			mesg = "Book details deleted successfully , for book id :" + bookId;
//		}
//		return mesg;
//	}
}
