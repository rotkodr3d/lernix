package com.ss20team4.lernix.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.entity.User;
import com.ss20team4.lernix.repos.ExamRepo;
import com.ss20team4.lernix.repos.ExerciseRepo;
import com.ss20team4.lernix.repos.UserRepo;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
@RequestMapping(path="/post")
public class LernixPostController {

	@Autowired
	ExerciseRepo exerciseRepo;
	
	@Autowired
	ExamRepo examRepo;
	
	@Autowired
	UserRepo userRepo;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@PostMapping("/learnUnit")
	public String createLearnUnit() {
		return "";	
	}
	
	@PostMapping(path="/exercise", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> createExercise(@Valid @RequestBody Map<String,String> json) throws JsonProcessingException {
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date formattedDeadline;
		try {
			formattedDeadline = formatter.parse(json.get("deadline"));
			Exercise exercise = new Exercise();
			exercise.setExerciseForExam(examRepo.getOne(Integer.parseInt(json.get("exerciseForExam"))));
			exercise.setType(json.get("type"));
			exercise.setDeadline(new Date(formattedDeadline.getTime()));
			exerciseRepo.save(exercise);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ObjectMapper().writeValueAsString("{error: true}"), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(new ObjectMapper().writeValueAsString("{success: true}"), HttpStatus.OK);
	}
	
	@PostMapping(path="/exam")
	public ResponseEntity<String> createExam(@RequestBody Exam newExam) throws JsonProcessingException {
		if (!examRepo.existsById(newExam.getExamNr())) {
			examRepo.save(newExam);
			return new ResponseEntity<>(new ObjectMapper().writeValueAsString("{success: true}"), HttpStatus.OK);
		}
		return new ResponseEntity<>(new ObjectMapper().writeValueAsString("{error: {message: Prüfung konnte nicht gespeichert werden!}}"), HttpStatus.BAD_REQUEST);
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User newUser) throws JsonProcessingException {
		if (!userRepo.existsById(newUser.getMatNr())) {
			newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
			User savedUser = userRepo.save(newUser);
			String user = new ObjectMapper().writeValueAsString(savedUser);
			return ResponseEntity.status(HttpStatus.CREATED).headers(new HttpHeaders()).body(savedUser);
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).headers(new HttpHeaders()).body(newUser);
	}
}
