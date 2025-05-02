package com.SoftTestLab.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.SoftTestLab.entity.Application;
import com.SoftTestLab.service.SoftTestLabService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SoftTestLabController {

	@Autowired
	SoftTestLabService service;
	
	@PostMapping("/submitApplication")
	public Application submitApplication(@RequestBody Application application) {
		service.submitApplication(application);
		return application;
		
	}

}
