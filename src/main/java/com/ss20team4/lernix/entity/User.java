package com.ss20team4.lernix.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

/**
 * 
 * @author Christian
 *
 * In this case the user is the student
 */

@Entity
public class User {

	@Id
	@Column(name = "mat_nr", unique = true)
	private Integer matNr;
	
	@Email
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
}
