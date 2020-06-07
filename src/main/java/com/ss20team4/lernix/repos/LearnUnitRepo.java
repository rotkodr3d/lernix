package com.ss20team4.lernix.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ss20team4.lernix.entity.LearnUnit;
import com.ss20team4.lernix.entity.User;

@Service
public interface LearnUnitRepo extends JpaRepository<LearnUnit, Integer>{

	List<LearnUnit> getLearnUnitByLearner(User learner);
}
