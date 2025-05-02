package com.SoftTestLab.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Component
@Entity
public class Application {

	@Id
	String fullName;
	String email;
	long contactNumber;
	String skills;
	String degree;
	String github;
	public Application() {
		super();
	}
	public Application(String fullName, String email, long contactNumber, String skills, String degree, String github) {
		super();
		this.fullName = fullName;
		this.email = email;
		this.contactNumber = contactNumber;
		this.skills = skills;
		this.degree = degree;
		this.github = github;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getGithub() {
		return github;
	}
	public void setGithub(String github) {
		this.github = github;
	}
	@Override
	public String toString() {
		return "Application [fullName=" + fullName + ", email=" + email + ", contactNumber=" + contactNumber
				+ ", skills=" + skills + ", degree=" + degree + ", github=" + github + "]";
	}
	
	
	
}
