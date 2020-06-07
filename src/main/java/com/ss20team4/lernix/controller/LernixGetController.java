package com.ss20team4.lernix.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.entity.LearnUnit;
import com.ss20team4.lernix.entity.User;
import com.ss20team4.lernix.repos.ExamRepo;
import com.ss20team4.lernix.repos.ExerciseRepo;
import com.ss20team4.lernix.repos.LearnUnitRepo;
import com.ss20team4.lernix.repos.UserRepo;

import java.security.Principal;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private LearnUnitRepo learnUnitRepo;
	
	@GetMapping("/exercises")
	public String getExercises(@RequestParam(value = "user", defaultValue="", required = false) String userName) {
		ObjectMapper objectMapper = new ObjectMapper();
		if (!userName.trim().isEmpty()) {
			User user = userRepo.getUserByUserName(userName);
			List<Exercise> exercises = exerciseRepo.getExercisesByStudent(user);
			exercises.stream().sorted(Comparator.comparing(Exercise::getDeadline)).collect(Collectors.toList());
			return toJson(objectMapper, exercises);
		}
		List<Exercise> exercises = exerciseRepo.findAll().stream().sorted(Comparator.comparing(Exercise::getDeadline)).collect(Collectors.toList());
		return toJson(objectMapper, exercises);
	}
	
	@GetMapping("/exams")
	public String getExams(@RequestParam(value = "user", defaultValue="", required = false) String userName) {
		ObjectMapper objectMapper = new ObjectMapper();
		if (!userName.trim().isEmpty()) {
			User user = userRepo.getUserByUserName(userName);
			Set<Exam> exams = user.getExamsToWrite();
			return toJson(objectMapper, exams);
		}
		List<Exam> exams = examRepo.findAll();
		return toJson(objectMapper, exams);
	}
	
	@GetMapping("/learnreminders")
	public String getLearnreminders(@RequestParam(value = "user", defaultValue="", required = false) String userName) {
		ObjectMapper objectMapper = new ObjectMapper();
		if (!userName.trim().isEmpty()) {
			User user = userRepo.getUserByUserName(userName);
			List<LearnUnit> learnUnits = learnUnitRepo.getLearnUnitByLearner(user);
			learnUnits.stream().sorted(Comparator.comparing(LearnUnit::getLearningDate)).collect(Collectors.toList());
			return toJson(objectMapper, learnUnits);
		}
		List<Exercise> exercises = exerciseRepo.findAll().stream().sorted(Comparator.comparing(Exercise::getDeadline)).collect(Collectors.toList());
		return toJson(objectMapper, exercises);
	}
	
	@GetMapping("/unchoosenExams")
	public String getUnchoosenExams(@RequestParam(value = "user", defaultValue="", required = false) String userName) {
		ObjectMapper objectMapper = new ObjectMapper();
		List<Exam> exams = examRepo.findAll();
		if (!userName.trim().isEmpty()) {
			User user = userRepo.getUserByUserName(userName);
			Set<Exam> examsToWrite = user.getExamsToWrite();
			List<Exam> unchoosenExams = exams.stream().filter(exam -> !examsToWrite.contains(exam)).collect(Collectors.toList());
			return toJson(objectMapper, unchoosenExams);
		}
		return toJson(objectMapper, exams);
	}
	
	@GetMapping("/login")
	public String loginPage() {
		return "login.html";
	}
	
	
	@GetMapping("/logged_in")
	public ResponseEntity<Principal> loggedIn(Principal user) {
		if (user == null) {
			return ResponseEntity.ok().body(user);
		}
		return ResponseEntity.ok().body(user);
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
