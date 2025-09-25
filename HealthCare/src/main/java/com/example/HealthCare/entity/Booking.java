package com.example.HealthCare.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;

import java.util.Date;

import jakarta.persistence.*;

@Entity
public class Booking {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Long userId;
	private String slot;
	private String address;
	private String gender;
	private Date dob;
	private int age;
	private String service;
	private String contactNo;
    private String centerName;
    
	public Booking(Long id,String name, Long userId, String slot, String address, String gender,
			Date dob, int age, String service, String contactNo, String centerName) {
		super();
		this.id = id;
		this.name=name;
		this.userId = userId;
		this.slot = slot;
		this.address = address;
		this.gender = gender;
		this.dob = dob;
		this.age = age;
		this.service = service;
		this.contactNo = contactNo;
		this.centerName = centerName;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getSlot() {
		return slot;
	}

	public void setSlot(String slot) {
		this.slot = slot;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getCenterName() {
		return centerName;
	}

	public void setCenterName(String centerName) {
		this.centerName = centerName;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
