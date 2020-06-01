package com.ss20team4.lernix.model;

import org.springframework.stereotype.Component;
import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.User;

@Component
public class ExerciseDemoMapping {

	private Integer id;
	private String type;	
	private Float timeNeed;
	private Float timeWorked;
	private String deadline;
	private Integer exerciseForExam;
	private Integer student;
	
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

	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}

	public Integer getStudent() {
		return student;
	}

	public void setStudent(Integer student) {
		this.student = student;
	}

	public Integer getExerciseForExam() {
		return exerciseForExam;
	}

	public void setExerciseForExam(Integer exerciseForExam) {
		this.exerciseForExam = exerciseForExam;
	}
}
