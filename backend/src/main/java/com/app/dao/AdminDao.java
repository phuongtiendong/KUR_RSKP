package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojos.Users;

public interface AdminDao extends JpaRepository<Users,Integer> {
	
	@Query( value = "SELECT * FROM USERS u WHERE u.role = 'MANAGER'", nativeQuery = true)
	List<Users> findAllManagers();
	
}
