package com.SoftTestLab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SoftTestLab.dao.SoftTestLabDao;
import com.SoftTestLab.entity.Application;

@Service
public class SoftTestLabService {

	@Autowired
	SoftTestLabDao dao;
	
	public Application submitApplication(Application application) {
		dao.submitApplication(application);
		return application;	
	}
}
