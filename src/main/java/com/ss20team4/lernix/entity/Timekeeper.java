package com.ss20team4.lernix.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * 
 * @author Christian
 *	
 * This class keeps book about when a student has learned and/or worked
 *	and how long the student has learned and/or worked.
 */

@Entity
public class Timekeeper {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private Date date;
	
	private Integer timeWorked;

	private Integer timeLearned;
	
	@ManyToOne
	private User student;
	
	@ManyToOne
	private Exercise exercise;
	
	@ManyToOne
	private LearnUnit learnUnit;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Integer getTimeWorked() {
		return timeWorked;
	}

	public void setTimeWorked(Integer timeWorked) {
		this.timeWorked = timeWorked;
	}

	public Integer getTimeLearned() {
		return timeLearned;
	}

	public void setTimeLearned(Integer timeLearned) {
		this.timeLearned = timeLearned;
	}

	public User getStudent() {
		return student;
	}

	public void setStudent(User student) {
		this.student = student;
	}

	public Exercise getExercise() {
		return exercise;
	}

	public void setExercise(Exercise exercise) {
		this.exercise = exercise;
	}

	public LearnUnit getLearnUnit() {
		return learnUnit;
	}

	public void setLearnUnit(LearnUnit learnUnit) {
		this.learnUnit = learnUnit;
	}
}
