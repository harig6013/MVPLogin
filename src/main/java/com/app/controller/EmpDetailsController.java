package com.app.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.EmpDetailsEntity;
import com.app.repository.EmpDetailsRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmpDetailsController{
	
	@Autowired
	EmpDetailsRepository empDetailsRepository;
	
	@GetMapping("/employee")
	public List<EmpDetailsEntity> getEmpdetails(){
		return empDetailsRepository.findAll();
	}
	
	@PostMapping("/employee")
	public EmpDetailsEntity createEmploye( @RequestBody EmpDetailsEntity empdetailsmvpe ) {
		return empDetailsRepository.save(empdetailsmvpe);
	}
	
	// get employee by id
	@GetMapping("/employee/{id}")
	public EmpDetailsEntity getEmpDetailsmvp( @PathVariable Long id) {
		EmpDetailsEntity empdetails= empDetailsRepository.findById(id).orElse(null);
			return empdetails;
	}
	
	// update employee details by id
	@PutMapping("/employee/{id}")
	public EmpDetailsEntity updateEmp(@PathVariable Long id, @RequestBody EmpDetailsEntity empDetails){
		EmpDetailsEntity empdetails = empDetailsRepository.findById(id).orElse(null);
		empdetails.setEmpName(empDetails.getEmpName());
		empdetails.setEmail(empDetails.getEmail());
		empdetails.setDesignation(empDetails.getDesignation());
		empdetails.setLocation(empDetails.getLocation());
		empdetails.setAddress(empDetails.getAddress());
		EmpDetailsEntity updatetedEmployee = empDetailsRepository.save(empdetails);
		return updatetedEmployee;
	}
		
        //delete employee details by id
		@DeleteMapping("/employee/{id}")
		public Map<String, Boolean> deleteEmployee(@PathVariable Long id){
			EmpDetailsEntity empdetails= empDetailsRepository.findById(id).orElse(null);
			empDetailsRepository.delete(empdetails);
			Map<String, Boolean> response = new HashMap<>();
			response.put("delete", Boolean.TRUE);
			return response;
			
		}
	
	
}
