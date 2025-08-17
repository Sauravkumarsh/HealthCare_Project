package com.example.HealthCare.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HealthCare.entity.Center;
import com.example.HealthCare.entity.Test;
import com.example.HealthCare.repository.CenterRepository;
import com.example.HealthCare.repository.TestRepository;

@Service
public class CenterService {
	@Autowired
	CenterRepository repo;
	
	@Autowired
	TestRepository testRepo;

	public Center addCenter(Center center) {
		List<Test> test=center.getTests();
		testRepo.saveAll(test);
		return repo.save(center);
	}


	public Center updateCenter(Center center) {
		return repo.save(null);
		
	}

	public List<Center> getAll() {
		return repo.findAll();
	}
	
	public List<Center> getCenterByTest(String name){
		List<Test> tests=testRepo.findByName(name);
		List<Center> centers=new ArrayList<>();
		for(Test test:tests) {
			centers.addAll(repo.findByTests(test));
		}
		return centers;
	}
	
	public Center getCenterByName(String name) {
		return repo.findByName(name);
	}

}
