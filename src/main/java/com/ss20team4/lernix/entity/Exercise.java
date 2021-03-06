package com.ss20team4.lernix.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
public class Exercise {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String type;
	
	private Float timeNeed;
	
	private Float timeWorked;
	
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern= "dd.MM.yyyy")
	private Date deadline;
	
	@ManyToOne
	@JoinColumn(name = "exerciseForExam")
	private Exam exerciseForExam;
	
	@JsonIgnore
	@ManyToOne
	private User student;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Float getTimeNeed() {
		return timeNeed;
	}

	public void setTimeNeed(Float timeNeed) {
		this.timeNeed = timeNeed;
	}

	public Float getTimeWorked() {
		return timeWorked;
	}

	public void setTimeWorked(Float timeWorked) {
		this.timeWorked = timeWorked;
	}

	public Date getDeadline() {
		return deadline;
	}

	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}

	public User getStudent() {
		return student;
	}

	public void setStudent(User student) {
		this.student = student;
	}
	
	public Exam getExerciseForExam() {
		return exerciseForExam;	
	}
	
	public void setExerciseForExam(Exam exerciseForExam) {
		this.exerciseForExam = exerciseForExam;
	}
//	@ManyToOne
//	private LearningEffort learningEffort;
}
