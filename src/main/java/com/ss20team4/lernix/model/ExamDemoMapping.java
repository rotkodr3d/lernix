package com.ss20team4.lernix.model;

import java.util.Set;
import org.springframework.stereotype.Component;
import com.ss20team4.lernix.entity.User;

@Component
public class ExamDemoMapping {
	private Integer examNr;
	private String examName;
	private String date;
	private Set<Integer> writeExam;
	private Integer learningTimeNeed;
	
	public Integer getExamNr() {
		return examNr;
	}

	public void setExamNr(Integer examNr) {
		this.examNr = examNr;
	}

	public String getExamName() {
		return examName;
	}

	public void setExamName(String examName) {
		this.examName = examName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Set<Integer> getWriteExam() {
		return writeExam;
	}

	public void setWriteExam(Set<Integer> writeExam) {
		this.writeExam = writeExam;
	}

	public Integer getLearningTimeNeed() {
		return learningTimeNeed;
	}

	public void setLearningTimeNeed(Integer learningTimeNeed) {
		this.learningTimeNeed = learningTimeNeed;
	}
}
