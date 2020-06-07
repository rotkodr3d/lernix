import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"

import Option from "../Option";
import Alert from "react-bootstrap/Alert";

class CreateLearnreminder extends Component {
	constructor() {
		super();
		this.state = {
			learningForExam: "",
			learningDate: "",
			timeToLearn: "",
			exams: {}
		}
	}

	async getData() {
		let response = await fetch('/get/exams?user=' + this.props.user.username);
		let body = await response.json();
		console.log(body)
		let exams  = body;
		this.setState({exams: exams});
	}

	onSubmit(e) {
		e.preventDefault();
		let { learningForExam, learningDate, timeToLearn } = this.state;

		if (learningForExam === "" || learningDate === "" || timeToLearn === "") {
			alert("Bitte überprüfe deine Eingaben auf Vollständigkeit.");
		} else {
			let learnreminder = {
				learningForExam: learningForExam,
				learningDate: learningDate,
				timeToLearn: timeToLearn,
				learner: this.props.user.username
			};
			const requestOptions = {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(learnreminder)
			}
			fetch("/post/learnreminder", requestOptions)
				.then((response) => response.json()
				.then((json) => {}));
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		const { learningForExam, learningDate, timeToLearn, exams } = this.state;
		return(
			<>
			<h1 className="mt-5">Lernerinnerung anlegen</h1>
			{exams.length > 0 ? (
				<Form className="mt-5" onSubmit={(event) => this.onSubmit(event)}>
					<Form.Group as={Row}>
						<Form.Label column md="3">Lernerinnerung für Prüfung</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control as="select" name="learningForExam" id="idLearningForExam" onClick={this.onChange}>
								{
									exams.map((exam) => <Option value={exam.examNr} text={exam.examName} key={exam.examNr} />)
								}
							</Form.Control>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column md="3">Tag an dem du lernen möchtest</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="learningDate" name="learningDate" type="date" placeholder="" onChange={this.onChange}></Form.Control>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column md="3">Geplante Lerndauer</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="timeToLearn" name="timeToLearn" type="number" placeholder="" onChange={this.onChange}></Form.Control>
						</Col>
					</Form.Group>
					<Button variant="primary" type="submit">
						Anlegen
					</Button>
					</Form>	
				) : (
					<Alert variant="warning">HINWEIS! Du hast dir keine Prüfungen hinzugefügt. Bitte füge dir eine hinzu.</Alert>
				)}
			</>
		);
	}
}

export default CreateLearnreminder;