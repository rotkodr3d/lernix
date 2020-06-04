import React, { Component } from "react";
import Table from "react-bootstrap/Table";

import Exam from "./Exam";

class ShowExams extends Component {

	constructor() {
		super();
		this.state = {
			exams: {}
		};
	}

	async getExams() {
		let response = await fetch('/get/exams');
		let body = await response.json();

		this.setState({exams: body});
		console.log(this.state.exams);
	}

	render() {
		const { exams } = this.state;
		return (
			<>
				<div>
					<h1>Deine Prüfungen</h1>
				</div>
				{exams.length > 0 ? (
				<Table striped bordered hover>
					<thead>
						<tr>
						<th>Prüfungsnummer</th>
						<th>Fach</th>
						<th>Prüfungsdatum</th>
						<th>Lernaufwand</th>
						</tr>
					</thead>
					<tbody>
						{exams.map((exam) => (
							<Exam examNr={exam.examNr} examName={exam.examName} date={exam.date} learningTimeNeed={exam.learningTimeNeed} key={exam.examNr} />
						))}
					</tbody>
				</Table>
				) : (
					<div>ERROR</div>
				)}
			</>
		);
	}

	componentDidMount() {
		this.getExams();
	}
}

export default ShowExams;