package com.ss20team4.lernix.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

/**
 * 
 * In this case the user is the student
 */

@Entity
public class User {

	@Id
	@Column(name = "mat_nr", unique = true)
	private Integer matNr;
	
	@Email
	@Column(unique = true)
	private String email;
	
	@NotEmpty
	@Column(unique = true)
	private String userName;
	
	@NotEmpty
	private String password;
	
	@ManyToMany
	@JoinTable(
			name = "write_exam",
			joinColumns = @JoinColumn(name = "mat_nr"),
			inverseJoinColumns = @JoinColumn(name = "exam_nr"))
	private Set<Exam> examsToWrite;
	
	@ManyToOne
    @JoinColumn(name ="role_key")
    private Role role;

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

	public Set<Exam> getExamsToWrite() {
		return examsToWrite;
	}

	public void setExamsToWrite(Set<Exam> examsToWrite) {
		this.examsToWrite = examsToWrite;
	}
	
	public void setRole(Role role) {
		this.role = role;
	}
	
	public Role getRole() {
		return role;
	}
}
