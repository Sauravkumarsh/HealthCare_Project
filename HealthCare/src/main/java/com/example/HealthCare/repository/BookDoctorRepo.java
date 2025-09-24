package com.example.HealthCare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCare.entity.BookDoctor;

@Repository
public interface BookDoctorRepo extends JpaRepository<BookDoctor,Long> {

	
}
