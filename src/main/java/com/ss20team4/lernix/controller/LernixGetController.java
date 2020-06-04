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
import org.springframework.web.bind.annotation.RequestParam;

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
		return toJson(objectMapper, exercises);
	}
	
	@GetMapping("/exams")
	public String getExams(@RequestParam(value = "onlyNr", defaultValue = "false", required = false) String onlyNr) {
		ObjectMapper objectMapper = new ObjectMapper();
		if (Boolean.parseBoolean(onlyNr)) {
			List<Integer> examNrs = examRepo.getAllExamNrs();
			return toJson(objectMapper, examNrs);
		}
		List<Exam> exams = examRepo.findAll();
		return toJson(objectMapper, exams);
	}
	
	private String toJson(ObjectMapper objectMapper, Object value) {
		try {
			return objectMapper.writeValueAsString(value);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return "{error: true}";
		}
	}
}
