import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"

class ExamForm extends Component {
	constructor() {
		super();
		this.state = {
			examNr: "",
			examName: "",
			date: "",
			learningTimeNeed: ""
		}
	}

	handleSubmit(e) {
		const { examNr, examName, date, learningTimeNeed } = this.state;
		const { createExam } = this.props;
		e.preventDefault();

		if (examNr === "" || examName === "" || date === "" || learningTimeNeed === "") {
			alert("Bitte überprüfe deine Eingaben auf Vollständigkeit.");
		} else {
			createExam({
				examNr, 
				examName, 
				date, 
				learningTimeNeed
			});
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { examNr, examName, date, learningTimeNeed } = this.state;
		return(
			<Form className="mt-5" onSubmit={(event) => this.handleSubmit(event)}>
				<Form.Group as={Row}>
					<Form.Label column md="3">Prüfungsnummer</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control id="examNr" name="examNr" type="text" placeholder="" onChange={this.onChange}></Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column md="3">Prüfungsfach</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control id="examName" name="examName" type="text" placeholder="z.B. Fortgeschrittene Programmierung" onChange={this.onChange}></Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column md="3">Prüfungsdatum</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control id="date" name="date" type="date" placeholder="" onChange={this.onChange}></Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column md="3">Lernaufwand</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control id="learningTimeNeed" name="learningTimeNeed" type="number" placeholder="" onChange={this.onChange}></Form.Control>
					</Col>
				</Form.Group>
				<Button variant="primary" type="submit">
					Anlegen
				</Button>
			</Form>
		);
	}
}

export default ExamForm;