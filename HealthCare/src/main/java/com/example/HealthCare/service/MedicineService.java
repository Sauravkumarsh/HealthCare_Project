package com.example.HealthCare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCare.entity.Medicine;
import com.example.HealthCare.repository.MedicineRepository;

@Service
public class MedicineService {
	@Autowired
	MedicineRepository repo;
	
	public Medicine addMedicine(Medicine medicine) {
		return repo.save(medicine);
	}
	
	public List<Medicine> getAll(){
		return repo.findAll();
	}

}
