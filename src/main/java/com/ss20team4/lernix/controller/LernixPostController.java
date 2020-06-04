package com.ss20team4.lernix.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.repos.ExerciseRepo;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(path="/post")
public class LernixPostController {

	@Autowired
	ExerciseRepo exerciseRepo;
	
	@PostMapping("/learnUnit")
	public String createLearnUnit() {
		return "";	
	}
	
	@PostMapping("/exercise")
	public String createExercise(@Valid @RequestBody String json) {
		//exerciseRepo.save(exercise);
		return "";
	}
	
	@PostMapping("/user")
	public String createUSer() {
		return "";
	}
}
