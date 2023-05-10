package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Books;

import com.app.pojos.Users;
import com.app.services.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	
	@GetMapping("/{adminId}")
	public ResponseEntity<?> getAdmin(@PathVariable int adminId)
	{
		System.out.println("In get admin method");
		Users admin = adminService.fetchAdmin(adminId);
		System.out.println("Admin data "+admin);
	     	if(admin==null)
	     	{
	     		return new ResponseEntity<>("Invalid admin id",HttpStatus.NOT_FOUND);
	     	}
	     	else
	     		
	     		return new ResponseEntity<>(admin,HttpStatus.OK);
	     	
	}
//	@GetMapping("/{userid}")
//	// @PathVariable => a binding between a path var to method arg.
//	public ResponseEntity<?> getfetchAdmin(@PathVariable int id) {
//		System.out.println("in get admin " + id);
//		
//			return ResponseEntity.ok(adminService.getAdmin(id));
//		
//	}
//	
	@GetMapping("/manager/{managerId}")
	public Users getManager(@PathVariable int managerId)
	{
		System.out.println("in get books"+managerId);
		return adminService.fetchManager(managerId);
	}
	
	@GetMapping("/managerList")
	public ResponseEntity<?> getAllManagers()
	{
		return new ResponseEntity<>(adminService.fetchAllManagers(),HttpStatus.OK);
	}
	@PostMapping()
	public ResponseEntity<Users> storeAdmin(@RequestBody Users admin) 
	{
		System.out.println("in post users"+admin);
		return ResponseEntity.ok(adminService.registerAdmin(admin));
	}
	
	@PostMapping("/addManager")
	public ResponseEntity<Users> storeManager(@RequestBody Users manager)
	{
		System.out.println("in post manager"+manager);
		return ResponseEntity.ok(adminService.addManager(manager));
	}
	

	@PutMapping
	public ResponseEntity<Users> updateAdminDetails(@RequestBody Users admin)
	{
		System.out.println("in edit users"+admin);
		return ResponseEntity.ok(adminService.editAdmin(admin));
	}
	
	@PutMapping("/updateManager")
	public ResponseEntity<Users> updateManagerDetails(@RequestBody Users manager)
	{
		System.out.println("in put manager"+manager);
		return ResponseEntity.ok(adminService.editManager(manager));
	}
	
	@DeleteMapping("/{admin_id}")
	public ResponseEntity<?> removeAdmin(@PathVariable int admin_id)
	{
		System.out.println("in delete users");
		
		return new ResponseEntity<>(adminService.deleteAdmin(admin_id),HttpStatus.OK);
	}
	
	@DeleteMapping("/manager/{manager_id}")
	public ResponseEntity<?> removeManager(@PathVariable int manager_id)
	{
		System.out.println("in delete users");
		
		return new ResponseEntity<>(adminService.deleteManager(manager_id),HttpStatus.OK);
	}
	
	

}
