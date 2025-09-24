package com.example.HealthCare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCare.entity.BookDoctor;
import com.example.HealthCare.repository.BookDoctorRepo;

@Service
public class BookDoctorService {

	@Autowired
	BookDoctorRepo repo;
	
	public BookDoctor addBooking(BookDoctor bookDoctor) {
		return repo.save(bookDoctor);
	}
	
	public BookDoctor getById(Long id) {
		return repo.findById(id).get();
	}
}
