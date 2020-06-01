package com.ss20team4.lernix.model;

import org.springframework.stereotype.Component;
import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.User;

@Component
public class LearnUnitDemoMapping {

	private Integer id;
	
	/**
	 * The date the user wants to learn
	 */
	private String learningDate;
	
	/**
	 * Planned time to learn
	 */
	private Integer timeToLearn;	

	/**
	 * Actual time learned
	 */
	private Integer timeLearned;
	
	/**
	 * The exam the user is learning for
	 */
	private Integer exam;
	
	/**
	 * The user who is learning
	 */
	private Integer learner;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLearningDate() {
		return learningDate;
	}

	public void setLearningDate(String learningDate) {
		this.learningDate = learningDate;
	}

	public Integer getTimeToLearn() {
		return timeToLearn;
	}

	public void setTimeToLearn(Integer timeToLearn) {
		this.timeToLearn = timeToLearn;
	}

	public Integer getTimeLearned() {
		return timeLearned;
	}

	public void setTimeLearned(Integer timeLearned) {
		this.timeLearned = timeLearned;
	}

	public Integer getExam() {
		return exam;
	}

	public void setExam(Integer exam) {
		this.exam = exam;
	}

	public Integer getLearner() {
		return learner;
	}

	public void setLearner(Integer learner) {
		this.learner = learner;
	}
}
