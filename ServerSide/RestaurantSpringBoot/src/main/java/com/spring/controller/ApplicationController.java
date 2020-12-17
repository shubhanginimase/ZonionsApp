package com.spring.controller;

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
import org.springframework.web.bind.annotation.RestController;

import com.spring.model.Restaurant;
import com.spring.repository.AdminRepository;
import com.spring.repository.RestaurantRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ApplicationController 
{
	@Autowired
	public AdminRepository adminrepository;
	@Autowired
	public RestaurantRepository restaurantrepository;
	
	
	@PostMapping("/restaurants")
	public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant resto){
		System.out.println("hiii");
		try {
			Restaurant _rest=restaurantrepository.save(new Restaurant(resto.getRest_name(),resto.getRest_address(),resto.getPhone(),resto.getOpen_time(),resto.getClose_time()));
			System.out.println("opn: "+_rest.getOpen_time()+"close: "+_rest.getClose_time());
			return new ResponseEntity<>(_rest,HttpStatus.CREATED);
		}catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/restaurants")
	public List<Restaurant> getRestaurant(){
		return restaurantrepository.findAll();
	}
	
	@GetMapping("/restaurants/{id}")
	public ResponseEntity<Restaurant> getRestoById(@PathVariable int id){
		Optional<Restaurant> restoData=restaurantrepository.findById(id);
		if(restoData.isPresent()) {
			System.out.println(restoData.get());
			return new ResponseEntity<>(restoData.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	@DeleteMapping("/restaurants/{id}")
	public ResponseEntity<HttpStatus> deleteById(@PathVariable int id){
		try {
			restaurantrepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch (Exception e) {
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping("/restaurants/{id}")
	public ResponseEntity<Restaurant> updateRestaurant(@PathVariable int id,@RequestBody Restaurant resto){
		Optional<Restaurant> restodata=restaurantrepository.findById(id);
		if(restodata.isPresent()) {
			Restaurant r=restodata.get();
			r.setRest_name(resto.getRest_name());
			r.setRest_address(resto.getRest_address());
			r.setPhone(resto.getPhone());
			r.setOpen_time(resto.getOpen_time());
			r.setClose_time(resto.getClose_time());
			return new ResponseEntity<>(restaurantrepository.save(r),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
