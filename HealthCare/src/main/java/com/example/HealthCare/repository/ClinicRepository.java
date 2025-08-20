package com.example.HealthCare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HealthCare.entity.Clinic;

@Repository
public interface ClinicRepository extends JpaRepository<Clinic,Long> {
	
	

}
