package com.ss20team4.lernix.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.ss20team4.lernix.entity.LearnUnit;

@Service
public interface LearnUnitRepo extends JpaRepository<LearnUnit, Integer>{

}
