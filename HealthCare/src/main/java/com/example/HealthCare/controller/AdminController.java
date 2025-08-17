package com.example.HealthCare.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.HealthCare.dto.BookingDetails;
import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.User;
import com.example.HealthCare.service.BookingService;
import com.example.HealthCare.service.CenterService;
import com.example.HealthCare.service.UserService;

@RestController
@RequestMapping("/diagnostic/admin")
@CrossOrigin(origins = {"http://localhost:5173"})
public class AdminController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	CenterService centerService;
	
	
	@Autowired
	private BookingService bookingService;
	
	@PostMapping("/addCenter")
	public ResponseEntity<Center> addCenter(@RequestBody Center center) {
		return new ResponseEntity<>(centerService.addCenter(center),HttpStatus.CREATED);
	}
	
	@GetMapping("/getAllCenter")
	public ResponseEntity<List<Center>> getAll(){
		try {
			return new ResponseEntity<>(centerService.getAll(),HttpStatus.OK);
			
		}
		catch(Exception e) {
			e.printStackTrace();
			
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/getAllUser")
	public ResponseEntity<List<User>> getAllUser(){

		try {
			return new ResponseEntity<>(userService.getAll(),HttpStatus.OK);
		}
		catch(Exception e) {
			e.printStackTrace();
			
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
		

	}
	
	@GetMapping("/getBookinglist")
	public ResponseEntity<List<BookingDetails>> getAllBookingList(){
		return new ResponseEntity<>(bookingService.getAll(),HttpStatus.OK);

	}

}
