package com.example.HealthCare.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BookDoctor {
    
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Date dob;
	private int age;
	private String address;
	private String contactNo;
	private Long userId;
	private String gender;
	public BookDoctor(String name, Date dob, int age, String address, String contactNo, Long userId, String gender) {
		super();
		this.name = name;
		this.dob = dob;
		this.age = age;
		this.address = address;
		this.contactNo = contactNo;
		this.userId = userId;
		this.gender=gender;
	}
	public BookDoctor() {
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	@Override
	public String toString() {
		return "BookDoctor [id=" + id + ", name=" + name + ", dob=" + dob + ", age=" + age + ", address=" + address
				+ ", contactNo=" + contactNo + ", userId=" + userId + "]";
	}
	
}
