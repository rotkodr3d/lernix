package com.ss20team4.lernix;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ss20team4.lernix.configuration.DemoLifecycleConfig;
import com.ss20team4.lernix.entity.Exam;
import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.entity.LearnUnit;
import com.ss20team4.lernix.entity.User;
import com.ss20team4.lernix.model.ExamDemoMapping;
import com.ss20team4.lernix.model.ExerciseDemoMapping;
import com.ss20team4.lernix.model.LearnUnitDemoMapping;
import com.ss20team4.lernix.model.UserDemoMapping;
import com.ss20team4.lernix.repos.ExamRepo;
import com.ss20team4.lernix.repos.ExerciseRepo;
import com.ss20team4.lernix.repos.LearnUnitRepo;
import com.ss20team4.lernix.repos.UserRepo;

@Component
public class DemoLernixLifecycleBean {

	private boolean running;
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private ExamRepo examRepo;
	@Autowired
	private ExerciseRepo exerciseRepo;
	@Autowired
	private LearnUnitRepo learnUnitRepo;
	@Autowired
	private DemoLifecycleConfig demoLifecycleConfig;
	
	@PostConstruct
	public void init() {
		if (userRepo.count() == 0 && examRepo.count() == 0 && exerciseRepo.count() == 0 && learnUnitRepo.count() == 0) {
			createExams();
			createUser();
			createExercises();
			createLearnUnits();
		}
		running = true;
		
	}
	
	private void createUser() {
		List<UserDemoMapping> demoUsers = demoLifecycleConfig.getUsers();
		List<User> users = new ArrayList<>();
		for (UserDemoMapping demoUser : demoUsers) {
			User user = new User();
			user.setMatNr(demoUser.getMatNr());
			user.setEmail(demoUser.getEmail());
			user.setUserName(demoUser.getUserName());
			user.setPassword(demoUser.getPassword());
			user.setExamsToWrite(new HashSet<>(examRepo.findAllById(demoUser.getExamsToWrite())));
			users.add(user);
		}

		userRepo.saveAll(users);
	}
	
	private void createExams() {
		List<ExamDemoMapping> demoExams = demoLifecycleConfig.getExams();
		List<Exam> exams = new ArrayList<>();
		SimpleDateFormat sdf = new SimpleDateFormat("dd.MM.yyyy");
		
		for (ExamDemoMapping demoExam : demoExams) {
			Exam exam = new Exam();
			exam.setExamNr(demoExam.getExamNr());
			exam.setExamName(demoExam.getExamName());
			exam.setLearningTimeNeed(demoExam.getLearningTimeNeed());
			try {
				exam.setDate(new Date(sdf.parse(demoExam.getDate()).getTime()));
			} catch (ParseException e) {
				exam.setDate(new Date(System.currentTimeMillis()));
				e.printStackTrace();
			}
			exams.add(exam);
		}
		examRepo.saveAll(exams);
	}
	
	private void createExercises() {
		List<ExerciseDemoMapping> demoExercises = demoLifecycleConfig.getExercises();
		SimpleDateFormat sdf = new SimpleDateFormat("dd.MM.yyyy");
		List<Exercise> exercises = new ArrayList<>();
		
		for (ExerciseDemoMapping demoExercise : demoExercises) {
			Exercise exercise = new Exercise();
			exercise.setId(demoExercise.getId());
			exercise.setType(demoExercise.getType());
			exercise.setStudent(userRepo.getOne(demoExercise.getStudent()));
			exercise.setTimeNeed(demoExercise.getTimeNeed());
			exercise.setTimeWorked(demoExercise.getTimeWorked());
			try {
				exercise.setDeadline(new Date(sdf.parse(demoExercise.getDeadline()).getTime()));
			} catch (ParseException e) {
				exercise.setDeadline(new Date(System.currentTimeMillis()));
				e.printStackTrace();
			}
			exercises.add(exercise);
		}
		exerciseRepo.saveAll(exercises);		
	}
	
	private void createLearnUnits() {
		List<LearnUnitDemoMapping> demoLearnUnits = demoLifecycleConfig.getLearnUnits();
		List<LearnUnit> learnUnits = new ArrayList<>();
		SimpleDateFormat sdf = new SimpleDateFormat("dd.MM.yyyy");
		
		for (LearnUnitDemoMapping demoLearnUnit : demoLearnUnits) {
			LearnUnit learnUnit = new LearnUnit();
			learnUnit.setId(demoLearnUnit.getId());
			learnUnit.setExam(examRepo.getOne(demoLearnUnit.getExam()));
			learnUnit.setLearner(userRepo.getOne(demoLearnUnit.getLearner()));
			try {
				learnUnit.setLearningDate(new Date(sdf.parse(demoLearnUnit.getLearningDate()).getTime()));
			} catch (ParseException e) {
				learnUnit.setLearningDate(new Date(System.currentTimeMillis()));
				e.printStackTrace();
			}
			learnUnit.setTimeToLearn(demoLearnUnit.getTimeToLearn());
			learnUnit.setTimeLearned(demoLearnUnit.getTimeLearned());
			learnUnits.add(learnUnit);
		}
		learnUnitRepo.saveAll(learnUnits);
	}
}
