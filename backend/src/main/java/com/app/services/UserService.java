package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excpetions.CustomerHandlingException;
import com.app.pojos.Users;
import com.app.dao.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	 public Optional<Users> loginRequest(String email, String password) {
		 
 		return Optional.ofNullable(urepo.Login(email, password)
 				.orElseThrow(() -> new CustomerHandlingException("Invalid Credentials!!!!")));						
	 }
	
	public Users RegisterUser(Users u) {	
		
		return urepo.save(u);	
	}
}