package com.ss20team4.lernix.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.repos.ExamRepo;
import com.ss20team4.lernix.repos.ExerciseRepo;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(path="/get")
public class LernixGetController {

	@Autowired
	private ExerciseRepo exerciseRepo;
	
	@Autowired
	private ExamRepo examRepo;
	
	@GetMapping("/exercises")
	public String getExercises() {
		ObjectMapper objectMapper = new ObjectMapper();
		List<Exercise> exercises = exerciseRepo.findAll().stream().sorted(Comparator.comparing(Exercise::getDeadline)).collect(Collectors.toList());
		try {
			return objectMapper.writeValueAsString(exercises);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return "";
		}
	}
	
	@GetMapping("/exams")
	public String getExams() {
		ObjectMapper objectMapper = new ObjectMapper();
		List<Exam> exams = examRepo.findAll();
		try {
			return objectMapper.writeValueAsString(exams);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return "";
		}
	}
}
