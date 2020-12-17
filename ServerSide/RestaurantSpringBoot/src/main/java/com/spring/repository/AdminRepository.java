package com.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> 
{
	public Admin findByUsernameAndPassword(String username, String password);

}
