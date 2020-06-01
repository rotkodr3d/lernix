package com.ss20team4.lernix.model;

import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.ss20team4.lernix.entity.Exam;

@Component
public class UserDemoMapping {

	private Integer matNr;
	private String email;
	private String userName;
	private String password;
	private List<Integer> examsToWrite;

	public Integer getMatNr() {
		return matNr;
	}

	public void setMatNr(Integer matNr) {
		this.matNr = matNr;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Integer> getExamsToWrite() {
		return examsToWrite;
	}

	public void setExamsToWrite(List<Integer> examsToWrite) {
		this.examsToWrite = examsToWrite;
	}
}
