package com.ss20team4.configuration;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.entity.User;

@Configuration
@ConfigurationProperties(prefix = "demoData")
public class DemoLifecycleConfig {

	List<User> users = new ArrayList<>();
	
	List<Exam> exams = new ArrayList<>();
	
	List<Exercise> exercises = new ArrayList<>();
	
	public List<Exam> getExams() {
		return exams;
	}

	public void setExams(List<Exam> exams) {
		this.exams = exams;
	}

	public List<Exercise> getExercises() {
		return exercises;
	}

	public void setExercises(List<Exercise> exercises) {
		this.exercises = exercises;
	}
	
	public void setUsers(List<User> users) {
		this.users = users;
	}
	
	public List<User> getUsers() {
		return users;
	}
}
