import React, { Component } from "react";

import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";

import Exam from "./Exam";

class ChooseExam extends Component {

	constructor() {
		super();
		this.state = {
			exams: {},
			chooseExam: true
		};
	}

	async getExams() {
		let response = await fetch('/get/unchoosenExams?' + 'user=' + this.props.user.username);
		let body = await response.json();

		this.setState({exams: body});
		console.log(this.state.exams);
	}

	render() {
		const { exams, chooseExam } = this.state;
		return (
			<>
			<h1 className="mt-5">Prüfungen hinzufügen</h1>
			{exams.length > 0 ? (
				<Table className="mt-5" striped bordered hover>
					<thead>
						<tr>
							<th>Prüfungsnummer</th>
							<th>Fach</th>
							<th>Prüfungsdatum</th>
							<th>Lernaufwand</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{exams.map((exam) => (
							<Exam examNr={exam.examNr} examName={exam.examName} date={exam.date} learningTimeNeed={exam.learningTimeNeed} chooseExam={chooseExam} {...this.props} key={exam.examNr} />
						))}
					</tbody>
				</Table>
			) : <Alert></Alert>}
			</>
		);
	}

	componentDidMount() {
		this.getExams();
	}
}

export default ChooseExam;