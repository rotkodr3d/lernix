import React, { Component } from "react";

import ExerciseList from "./ExerciseList";

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
			<div>
				<h1>Aufgaben Liste</h1>
				<div>
					<ExerciseList exercises = {exercises} ></ExerciseList>
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.getExercises();
	}
}

export default ShowExercises;