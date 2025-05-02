package com.SoftTestLab.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.SoftTestLab.entity.Application;

@Repository
public class SoftTestLabDao {
	
	@Autowired
	SessionFactory factory;
	
	public Application submitApplication(Application application) {
		
		Session session = factory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(application);
		tx.commit();	
		return application;
		
	}

}
