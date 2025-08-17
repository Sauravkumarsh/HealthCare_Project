package com.example.HealthCare.entity;

import java.util.List;

import jakarta.persistence.*;

@Entity
public class Center {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	@OneToMany
	@JoinColumn(name="center_id")
	private List<Test> tests;
	private String address;

	public Center(String name,  String address, List<Test> tests) {
		super();
		this.name = name;
		this.address = address;
		this.tests=tests;
	}
	public Center() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	


	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	

	public List<Test> getTests() {
		return tests;
	}
	public void setTests(List<Test> tests) {
		this.tests = tests;
	}
	@Override
	public String toString() {
		return "Center [name=" + name + ", address=" + address + "]";
	}

}
