package com.ss20team4.lernix.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ss20team4.lernix.entity.Exercise;
import com.ss20team4.lernix.entity.User;

@Service
public interface ExerciseRepo extends JpaRepository<Exercise, Integer> {

	public List<Exercise> getExercisesByStudent(User student);
}
