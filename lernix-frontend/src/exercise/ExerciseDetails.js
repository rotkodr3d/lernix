import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import { ExerciseTableHead } from "./ShowExercises";

class ExerciseDetails extends Component {

	constructor() {
		super();
		this.state = {
			exercise: {}
		};
	}

	getData() {

	}

	render() {
		const { exercise } = this.state;
		return(
			<div>
				<Row>
					<Table>
						<ExerciseTableHead/>
						<tbody>
							<tr>
								<td></td>
							</tr>
						</tbody>
					</Table>
				</Row>
			</div>
		)
	}

	componentDidMount() {
		this.getData();
	}
}

export default ExerciseDetails;