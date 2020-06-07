package com.ss20team4.lernix.repos;

import org.springframework.stereotype.Service;

import com.ss20team4.lernix.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

@Service
public interface UserRepo extends JpaRepository<User, Integer> {

	User getUserByUserName(String userName);

}
