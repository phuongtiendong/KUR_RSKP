package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Books;

public interface BooksDao extends JpaRepository<Books, Integer> {
	
//	@Query("SELECT * FROM books  WHERE book_name LIKE %?1%" + " OR author LIKE %?1%")
//	public List<Books> search(String keyword);

}
