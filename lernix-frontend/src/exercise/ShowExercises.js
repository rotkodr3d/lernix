import React, { Component } from "react";

import Exercise from "./Exercise";

import Table from "react-bootstrap/Table";

class ShowExercises extends Component {

	listItems;

	constructor() {
		super();
		this.state = {
			exercises: {}
		};
	}

	async getExercises() {
		let response = await fetch('/get/exercises');
		let body = await response.json();

		this.setState({exercises: body});
		console.log(this.state.exercises);
	}

	render() {
		const { exercises } = this.state;
		return(
		<>
			<div>
				<h1>Deine Aufgaben</h1>
			</div>
			{exercises.length > 0 ? (
				<Table striped bordered hover>
					<thead>
						<tr>
						<th>Aufgabe</th>
						<th>Fach</th>
						<th>Gearbeitete Zeit</th>
						<th>Benötigte Zeit</th>
						<th>Fällig am</th>
						</tr>  
					</thead>
					<tbody>
						{exercises.map((exercise) => (
						<Exercise type={exercise.type} exam={exercise.exerciseForExam.examName} deadline={exercise.deadline} timeNeed={exercise.timeNeed} timeWorked={exercise.timeWorked} key={exercise.id} />
						))}
					</tbody>
				</Table>
      		) : (
        	<h3>{"Keine Aufgaben verfügbar"}</h3>
     		)}
		</>);
	}

	componentDidMount() {
		this.getExercises();
	}
}

export default ShowExercises;