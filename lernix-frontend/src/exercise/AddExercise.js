import React, { Component } from 'react';
import '../App.css';

import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

import ExerciseForm from "./ExerciseForm";

class AddExercise extends Component {

	constructor() {
		super();
		this.state = {
			exams: {},
			error: false,
			redirect: false
		}
	}
	async getData() {
		let response = await fetch('/get/exams');
		let body = await response.json();
		console.log(body)
		let exams  = body;
		this.setState({exams: exams});
	}

	onSubmit = (newExercise) => {
		//const {exerciseForExam, type, deadline} = this.state;

		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newExercise)
		}
		fetch("/post/exercise", requestOptions)
			.then((response) => response.json()
			.then((json) => {
				console.log(json["error"]);
				if (response.status === 200) {
					this.setState({alert: <Alert variant="success" className="mt-5">Aufgabe wurde angelegt!</Alert>});
				} else if (response.status === 400) {
					this.setState({alert: <Alert variant="warning" className="mt-5">Bitte überprüfe deine Eingaben und versuche es erneut.</Alert>});
				}
			})
			.catch((e) => {
				this.setState({alert: <Alert variant="danger" className="mt-5">{e.toString()}</Alert>});
			})).catch((e) => {
				this.setState({alert: <Alert variant="danger" className="mt-5">{e.toString()}</Alert>});
			});
	}

	render() {
		const { exams, error } = this.state;
		return(
		<>
			<Row className="justify-content-md-center">
				<h1 className="center mt-3">Aufgabe erstellen</h1>
			</Row>
			{this.state.alert}
			<Row className="justify-content-md-center">
				<Col md="10">
					{
						exams.length > 0 ? (
							<ExerciseForm exams={exams} addExercise={this.onSubmit}/>
						) : (
							<Alert className="mt-5" variant="warning"></Alert>
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