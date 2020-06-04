package com.ss20team4.lernix.repos;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ss20team4.lernix.entity.Exam;

public interface ExamRepo extends JpaRepository<Exam, Integer> {

	//public Exam get;
	@Query(nativeQuery=true, value = "select exam_nr from exam")
	public List<Integer> getAllExamNrs();
}
