package com.ss20team4.lernix.entity;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

//@Entity
public class LearningEffort {

	private Integer id;
	
	@ManyToOne
	private Exam exam;
	
	@ManyToOne
	private User student;
	
	private Float hoursLearnedForExam;
	
	private Float hoursWorkedForExam;
}
