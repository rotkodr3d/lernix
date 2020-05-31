package com.ss20team4.lernix.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ss20team4.lernix.entity.Exercise;

@Service
public interface ExerciseRepo extends JpaRepository<Exercise, Integer> {

}
