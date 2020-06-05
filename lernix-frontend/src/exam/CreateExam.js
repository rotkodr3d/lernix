import '../App.css';

import React, { Component } from "react";

import Alert from "react-bootstrap/Alert"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

import ExamForm from "./ExamForm";

class CreateExam extends Component {

	constructor() {
		super();
		this.state = {
			error: false,
		}
	}
	onSubmit = (newExam) => {

		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newExam)
		}
		fetch("/post/exam", requestOptions)
			.then((response) => response.json()
			.then((json) => {
				console.log(json["error"]);
				if (response.status == 200) {
					this.setState({alert: <Alert variant="success" className="mt-5">Aufgabe wurde angelegt!</Alert>});
				} else if (response.status == 400) {
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
		const { error } = this.state;
		return(
		<>
			<Row className="justify-content-md-center">
				<h1 className="center mt-3">Prüfung erstellen</h1>
			</Row>
			{this.state.alert}
			<Row className="justify-content-md-center">
				<Col md="10">
					<ExamForm createExam={this.onSubmit}/>
				</Col>
			</Row>	
		</>
		);
	}
}

export default CreateExam;