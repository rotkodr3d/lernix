import React, { Component } from "react"

import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"

import Option from "../Option";

class ExerciseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			exerciseForExam: "",
			type: "",
			deadline: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const { exerciseForExam, type, deadline, timeNeed } = this.state;
		const { addExercise, exams } = this.props;

		if (type === "" || deadline == null || timeNeed === "") {
			alert("Bitte überprüfe deine Eingaben auf Vollständigkeit.");
		} else {
			addExercise({
				exerciseForExam,
				type,
				deadline,
				timeNeed
			});
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { exerciseForExam, type, deadline } = this.state;
		const { exams } = this.props;
		return(
			<Form className="mt-5" onSubmit={(event) => this.handleSubmit(event)}>
				<Form.Group as={Row}>
					<Form.Label column md="3">Aufgabe zur Prüfung</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control as="select" name="exerciseForExam" id="idExerciseForExam" onClick={this.onChange}>
							{
								exams.map((exam) => <Option value={exam.examNr} text={exam.examName} key={exam.examNr} />)
							}
						</Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column md="3">Aufgaben Typ</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control id="type" name="type" type="text" placeholder="z.B Projekt, Hausarbeit" onChange={this.onChange}></Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column md="3">Geplante Dauer</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control id="timeNeed" name="timeNeed" type="number" placeholder="" onChange={this.onChange}></Form.Control>
					</Col>
				</Form.Group>
				<Form.Group as={Row}>
					<Form.Label column md="3">Fälligkeit</Form.Label>
					<Col md={{ span: 4, offset: 1 }}>
						<Form.Control id="deadline" name="deadline" type="date" placeholder="" onChange={this.onChange}></Form.Control>
					</Col>
				</Form.Group>
				<Button variant="primary" type="submit">
					Anlegen
				</Button>
			</Form>
		);
	}
}

export default ExerciseForm;