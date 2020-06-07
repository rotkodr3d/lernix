package com.ss20team4.lernix;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEnc {

	public static void main(String[] args) {
		String cryptPw = new BCryptPasswordEncoder().encode("321");
		System.out.println(cryptPw);
	}

}
