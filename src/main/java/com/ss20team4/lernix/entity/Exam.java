package com.ss20team4.lernix.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
public class Exam {

	@Id
	@Column(unique = true)
	private Integer examNr;
	
	@NotEmpty
	private String examName;
	
	@NotNull
	private Date date;

	@ManyToMany(mappedBy = "examsToWrite")
	private Set<User> writeExam;
	
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Set<User> getWriteExam() {
		return writeExam;
	}

	public void setWriteExam(Set<User> writeExam) {
		this.writeExam = writeExam;
	}

	public Integer getLearningTimeNeed() {
		return learningTimeNeed;
	}

	public void setLearningTimeNeed(Integer learningTimeNeed) {
		this.learningTimeNeed = learningTimeNeed;
	}
}
