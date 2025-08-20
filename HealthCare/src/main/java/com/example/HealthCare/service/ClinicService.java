package com.example.HealthCare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCare.entity.Clinic;
import com.example.HealthCare.repository.ClinicRepository;

@Service
public class ClinicService {
	
	@Autowired
	ClinicRepository clinicRepo;
	
	public Clinic addClinic(Clinic clinic) {
		return clinicRepo.save(clinic);
	}

	public List<Clinic> getAll(){
		return clinicRepo.findAll();
	}
}
