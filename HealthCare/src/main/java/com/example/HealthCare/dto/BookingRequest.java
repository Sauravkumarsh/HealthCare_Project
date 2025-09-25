package com.example.HealthCare.dto;

import java.util.Date;

public class BookingRequest {
	
	private Long userId;
	private String slot;
	private String name;
	private String address;
	private String gender;
	private Date dob;
	private int age;
	private String service;
	private String contactNo;
    private String centerName;
	public BookingRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookingRequest(Long userId,String name, String slot, String address, String gender, Date dob, int age, String service,
			String contactNo, String centerName) {
		super();
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
    
    
	

}
