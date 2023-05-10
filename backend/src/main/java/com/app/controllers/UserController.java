package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.pojos.Users;
import com.app.services.UserService;


@RestController
@CrossOrigin(origins = "*")
public class UserController {
	@Autowired
	UserService us;
	
	@PostMapping("/login")
	public Object Login(@RequestBody LoginRequest request)
	{
		return us.loginRequest(request.getEmail(),request.getPassword());
	}
	
	@PostMapping("/registeruser")
	public Users RegisterUser(@RequestBody Users u) {
		return us.RegisterUser(u);	
	}
}
