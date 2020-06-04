import React, { Component } from 'react';
import '../App.css';

import Alert from "react-bootstrap/Alert"
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"

import Option from "../Option";

class AddExercise extends Component {

	constructor() {
		super();
		this.state = {
			exams: {},
			options: {}
		}
	}
	async getData() {
		let response = await fetch('/get/exams');
		let body = await response.json();

		this.setState({exams: body, error: body});
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {exerciseForExam, type, deadline} = this.state;
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({exerciseForExam: exerciseForExam, type: type, deadline: deadline})
		}
		fetch("/post/exercise", requestOptions);
	}

	render() {
		const { exams } = this.state;
		return(
		<>
			<Row className="justify-content-md-center">
				<h1 className="center mt-3">Aufgabe erstellen</h1>
			</Row>
			<Row className="justify-content-md-center">
				<Col md="10">
					{
						exams.length > 0 ? (
							<Form className="mt-5" onSubmit={(event) => this.onSubmit(event)}>
								<Form.Group as={Row}>
									<Form.Label column md="3">Aufgabe zur Prüfung</Form.Label>
									<Col md={{span: 4, offset: 1}}>
										<Form.Control as="select" name="exerciseForExam" id="exerciseForExam" onChange={this.onChange}>
											{exams.map((exam) =>
													<Option value={exam.examNr} text={exam.examName} key={exam.examNr} />
											)}
										</Form.Control>
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label column md="3">Aufgaben Typ</Form.Label>
									<Col md={{span: 4, offset: 1}}>
										<Form.Control id="type" name="type" type="text" placeholder="z.B Projekt, Hausarbeit" onChange={this.onChange}></Form.Control>
									</Col>
								</Form.Group>
								<Form.Group as={Row}>
									<Form.Label column md="3">Fälligkeit</Form.Label>
									<Col md={{span: 4, offset: 1}}>
										<Form.Control id="deadline" name="deadline" type="date" placeholder="" onChange={this.onChange}></Form.Control>
									</Col>
								</Form.Group>
								<Button variant="primary" type="submit">
									Anlegen
								</Button>
						</Form>
						) : (
							<Alert className="mt-5"></Alert>
						)
					}
				</Col>
			</Row>	
		</>
		);
	}

	componentDidMount() {
		this.getData();
	}
}

export default AddExercise;