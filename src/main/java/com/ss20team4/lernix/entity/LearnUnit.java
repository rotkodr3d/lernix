package com.ss20team4.lernix.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class LearnUnit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	/**
	 * The date the user wants to learn
	 */
	@NotNull
	private Date learningDate;
	
	/**
	 * Planned time to learn
	 */
	@NotNull
	private Integer timeToLearn;
	
	/**
	 * Actual time learned
	 */
	@NotNull
	private Integer timeLearned;
	
	/**
	 * The exam the user is learning for
	 */
	@ManyToOne
	@JoinColumn(name="learningForExam")
	private Exam exam;
	
	/**
	 * The user who is learning
	 */
	@ManyToOne
	private User learner;
}
