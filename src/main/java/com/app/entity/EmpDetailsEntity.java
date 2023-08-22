package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="empDetailsmvp")
public class EmpDetailsEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="emp_name")
	private String empName; 
	
	@Column(name="emp_designation")
	private String designation;
	
	@Column(name="emp_location")
	private String location;
	
	@Column(name="emp_email")
	private String email;
	
	@Column(name="emp_address")
	private String address;
	public EmpDetailsEntity() {
		
	}
	public EmpDetailsEntity(String empName, String designation, String location, String email, String address) {
		super();
		this.empName = empName;
		this.designation = designation;
		this.location = location;
		this.email = email;
		this.address = address;
	}
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	


}
