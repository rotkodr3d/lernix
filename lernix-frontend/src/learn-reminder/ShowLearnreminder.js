import React, { Component } from "react";

import Learnreminder from "./Learnreminder";

import Table from "react-bootstrap/Table";

class ShowLearnreminder extends Component {

	constructor(props) {
		super(props);
		this.state = {
			learnreminders: {}
		}
	}

	async getLearnreminders() {
		let response = await fetch('/get/learnreminders?user=' + this.props.user.username);
		let body = await response.json();

		this.setState({learnreminders: body});
	}

	render() {
		const { learnreminders } = this.state;
		return(
		<>
			<div className="mt-5">
				<h1>Deine Lernerinnerungen</h1>
			</div>
			{learnreminders.length > 0 ? (
				<Table className="mt-5" striped bordered hover>
					<thead>
						<tr>
							<th>
								Prüfung
							</th>
							<th>
								Lerntag
							</th>
							<th>
								Geplante Lerndauer
							</th>
							<th>
								Gelernte Zeit
							</th>
						</tr>
					</thead>
					<tbody>
						{learnreminders.map((reminder) => (
						<Learnreminder exam={reminder.exam.examName} learningDate={reminder.learningDate} timeNeed={reminder.timeToLearn} timeWorked={reminder.timeLearned} key={reminder.id} />
						))}
					</tbody>
				</Table>
      		) : (
        	<h3>{"Keine Lernerinnerungen verfügbar"}</h3>
     		)}
		</>);
	}

	componentDidMount() {
		this.getLearnreminders();
	}
}

export default ShowLearnreminder;