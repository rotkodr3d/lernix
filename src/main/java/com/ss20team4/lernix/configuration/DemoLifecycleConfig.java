package com.ss20team4.lernix.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.entity.LearnUnit;
import com.ss20team4.lernix.entity.User;
import com.ss20team4.lernix.model.ExamDemoMapping;
import com.ss20team4.lernix.model.ExerciseDemoMapping;
import com.ss20team4.lernix.model.LearnUnitDemoMapping;
import com.ss20team4.lernix.model.UserDemoMapping;

@Configuration
@ConfigurationProperties(prefix = "demo-data")
public class DemoLifecycleConfig {

	private List<ExamDemoMapping> exams = new ArrayList<>();
	
	private List<UserDemoMapping> users = new ArrayList<>();
	
	private List<ExerciseDemoMapping> exercises = new ArrayList<>();
	
	private List<LearnUnitDemoMapping> learnUnits = new ArrayList<>();
	
	public List<ExamDemoMapping> getExams() {
		return exams;
	}

	public void setExams(List<ExamDemoMapping> exams) {
		this.exams = exams;
	}

	public List<ExerciseDemoMapping> getExercises() {
		return exercises;
	}

	public void setExercises(List<ExerciseDemoMapping> exercises) {
		this.exercises = exercises;
	}
	
	public void setUsers(List<UserDemoMapping> users) {
		this.users = users;
	}
	
	public List<UserDemoMapping> getUsers() {
		return users;
	}
	
	public void setLearnUnits(List<LearnUnitDemoMapping> learnUnits) {
		this.learnUnits = learnUnits;
	}
	
	public List<LearnUnitDemoMapping> getLearnUnits() {
		return learnUnits;
	}
}
