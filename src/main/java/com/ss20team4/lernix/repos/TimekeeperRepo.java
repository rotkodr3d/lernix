package com.ss20team4.lernix.repos;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.ss20team4.lernix.entity.Timekeeper;

@Service
public interface TimekeeperRepo extends JpaRepository<Timekeeper, Integer> {
	
	@Query(nativeQuery = true, value = "select * from timekeeper where student = :student and date = :date")
	public List<Timekeeper> getStudentWorkedOnDate(@Param("student") Integer student, @Param("date") Date date);

}
