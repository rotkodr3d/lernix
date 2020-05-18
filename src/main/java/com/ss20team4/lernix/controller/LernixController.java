package com.ss20team4.lernix.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ss20team4.lernix.model.Message;

@RestController
public class LernixController {
	
	@GetMapping("/greeting")
	public Message HelloWorld(@RequestParam(value="name") String userName) {
		return new Message(userName + ". You are using React and SpringBoot!");
	}

}
