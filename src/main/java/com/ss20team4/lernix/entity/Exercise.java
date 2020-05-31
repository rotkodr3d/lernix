package com.ss20team4.lernix.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Entity
public class Exercise {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String type;
	
	private Float timeNeed;
	
	private Float timeWorked;
	
	private Date deadline;
	
	@ManyToOne
	@JoinColumn(name = "exerciseForExam")
	private Exam exerciseForExam;
	
	@ManyToOne
	private User student;
	
//	@ManyToOne
//	private LearningEffort learningEffort;
}
