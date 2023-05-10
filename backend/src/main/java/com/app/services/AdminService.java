package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.pojos.Books;

import com.app.pojos.Users;


public interface AdminService {

	public Users registerAdmin(Users user);
	
	public Users editAdmin(Users updatedUser);
	
	public Optional<Users> deleteAdmin(int id);
	
	public Users fetchAdmin(int id);
	//public Users getAdmin(int userid);
	//public List<Users> getAdminDetails(int user);
	
	public Users fetchManager(int id);
	
	public List<Users> fetchAllManagers();
	
	public Users addManager(Users manager);
	
	public Users editManager(Users updatedManager);
	
	public Optional<Users> deleteManager(int id);
}
