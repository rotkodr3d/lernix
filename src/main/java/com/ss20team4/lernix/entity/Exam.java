package com.ss20team4.lernix.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Exam {

	@Id
	@Column(unique = true)
	private Integer examNr;
	
	/**
	 * Actually the subject
	 */
	@NotEmpty
	private String examName;
	
	@NotNull
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern= "dd.MM.yyyy")
	private Date date;

	@JsonIgnore
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
