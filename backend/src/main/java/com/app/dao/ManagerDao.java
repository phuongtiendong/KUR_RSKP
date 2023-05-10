package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Books;
import com.app.pojos.Users;

public interface ManagerDao extends JpaRepository<Users, Integer> {

	

	

}
