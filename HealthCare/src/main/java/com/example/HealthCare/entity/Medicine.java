package com.example.HealthCare.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Medicine {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String name;
	private double price;
	private String offer;
	private String category;
	private String subCategory;
	private String rating;
	private String description;
	private Long userId;
	
	public Medicine(Long id, String name, double price, String offer, String category, String subCategory,
			String rating, String description, Long userId) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.offer = offer;
		this.category = category;
		this.subCategory = subCategory;
		this.rating = rating;
		this.description = description;
		this.userId = userId;
	}

	public Medicine() {
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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getOffer() {
		return offer;
	}

	public void setOffer(String offer) {
		this.offer = offer;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Medicine [id=" + id + ", name=" + name + ", price=" + price + ", offer=" + offer + ", category="
				+ category + ", subCategory=" + subCategory + ", rating=" + rating + ", description=" + description
				+ ", userId=" + userId + "]";
	}
	
	
	
}
