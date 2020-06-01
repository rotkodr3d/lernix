package com.ss20team4.lernix.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.repos.ExerciseRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(path="/get")
public class LernixGetController {

	@Autowired
	private ExerciseRepo exerciseRepo;
	
	@GetMapping("/exercises")
	public String getExercises() {
		ObjectMapper objectMapper = new ObjectMapper();
		List<Exercise> exercises = exerciseRepo.findAll();
		try {
			return objectMapper.writeValueAsString(exercises);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
			return "";
		}
	}
}
