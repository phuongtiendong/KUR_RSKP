package com.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminDao;
import com.app.pojos.Users;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDao adminDao;

	@Override
	public Users registerAdmin(Users user) {
		return adminDao.save(user);
	}

	@Override
	public Users editAdmin(Users updatedUser) {
		return adminDao.save(updatedUser);
		
	}

	@Override
	public Optional<Users> deleteAdmin(int id) {
		Optional<Users> user=Optional.of(adminDao.findById(id).orElseThrow());
		adminDao.deleteById(id);
		return user;
	}
	

	@Override
	public Users addManager(Users manager) {
		return adminDao.save(manager);
	}

	@Override
	public Users editManager(Users updatedManager) {
		return adminDao.save(updatedManager);
	}

	@Override
	public Optional<Users> deleteManager(int id) {
		Optional<Users> manager=Optional.of(adminDao.findById(id).orElseThrow());
        adminDao.deleteById(id);		
		return manager;
	}

	@Override
	public Users fetchAdmin(int id) {
		return adminDao.getById(id);
	}

	@Override
	public Users fetchManager(int id) {
		return adminDao.getById(id);
	}

	@Override
	public List<Users> fetchAllManagers() {
		return adminDao.findAllManagers();
	}

//	@Override
//	public List<Users> getAdminDetails() {
//		// TODO Auto-generated method stub
//		return adminDao.findAll();
//	}

//	@Override
//	public Users getAdmin(int userid) {
//		return adminDao.getById(userid);
//	}

}
