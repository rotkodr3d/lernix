import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"

class CreateLearnreminder extends Component {
	constructor() {
		super();
		this.state = {
			examNr: "",
			examName: "",
			date: "",
			learningTimeNeed: ""
		}
	}

	async getData() {
		let response = await fetch('/get/exams');
		let body = await response.json();
		console.log(body)
		let exams  = body;
		this.setState({exams: exams});
	}

	handleSubmit(e) {
		const { examNr, learningDate, timeToLearn } = this.state;
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

	componentDidMount() {
		this.getData();
	}

	render() {
		const { examNr, learningDate, timeToLearn } = this.state;
		return(
			<Form className="mt-5" onSubmit={(event) => this.handleSubmit(event)}>
				<Form.Group as={Row}>
					<Form.Label column md="3">Lernerinnerung für Prüfung</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control as="select" name="exerciseForExam" id="idExerciseForExam" onClick={this.onChange}>
							{
								exams.map((exam) => <Option value={exam.examNr} text={exam.examName} key={exam.examNr} />)
							}
						</Form.Control>
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

export default CreateLearnreminder;