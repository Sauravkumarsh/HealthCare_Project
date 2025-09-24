package com.example.HealthCare.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.HealthCare.dto.BookingDetails;
import com.example.HealthCare.dto.BookingRequest;
import com.example.HealthCare.entity.BookDoctor;
import com.example.HealthCare.entity.Booking;
import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.Clinic;
import com.example.HealthCare.entity.Medicine;
import com.example.HealthCare.entity.User;
import com.example.HealthCare.service.BookDoctorService;
import com.example.HealthCare.service.BookingService;
import com.example.HealthCare.service.CenterService;
import com.example.HealthCare.service.ClinicService;
import com.example.HealthCare.service.MedicineService;
import com.example.HealthCare.service.UserService;

@RestController
@RequestMapping("/diagnostic/user")
@CrossOrigin(origins = {"http://localhost:5173"})
public class UserController {

	@Autowired
	private BookDoctorService service;
	
	@Autowired
	private CenterService centerService;
	
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private MedicineService medService;
	
	@Autowired
	private ClinicService clinicService;  
	
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
	

	
	@GetMapping("/search/{name}")
	public ResponseEntity<List<Center>> getCenterByTest(@PathVariable String name){
		return new ResponseEntity<>(centerService.getCenterByTest(name),HttpStatus.OK);
	}
	
	@PostMapping("/booking/{id}")
	public ResponseEntity<Booking> addBooking(@RequestBody BookingRequest booking ,@PathVariable Long id) {
		return new ResponseEntity<>(bookingService.addBooking(booking,id),HttpStatus.OK);
	}
	
	@GetMapping("/getBookingDetails/{id}")
	public ResponseEntity<List<BookingDetails>> getBookingDetails(@PathVariable Long id) {
		return new ResponseEntity<>(bookingService.getBooking(id),HttpStatus.OK);
	}
	
	@GetMapping("/getUser/{id}")
	public ResponseEntity<User> getUser(@PathVariable Long id) {
		return new ResponseEntity<>(userService.getUserById(id),HttpStatus.OK);
		
	}
	
	@GetMapping("/getAllDoctors")
	public ResponseEntity<List<Clinic>> getAllDoctors(){
		return new ResponseEntity<>(clinicService.getAll(),HttpStatus.OK);
	}
	
	@PutMapping("/updateUser/{id}")
	public ResponseEntity<User> updateUser( @RequestBody User user,@PathVariable Long id) {
		return new ResponseEntity<>(userService.updateUser(id,user),HttpStatus.OK);
	}
	
	@GetMapping("/getAllMedicine")
	public ResponseEntity<List<Medicine>> getAllMedicine(){
		try {
			return new ResponseEntity<>(medService.getAll(),HttpStatus.OK);
			
		}
		catch(Exception e) {
			e.printStackTrace();
			
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/bookDoctor")
	public ResponseEntity<BookDoctor> addBooking(@RequestBody BookDoctor bookDoctor){
		return new ResponseEntity<>(service.addBooking(bookDoctor),HttpStatus.OK);
	}
}