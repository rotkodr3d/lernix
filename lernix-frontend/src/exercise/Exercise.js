import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Exercise extends Component {

	constructor(props) {
		super(props);
		this.state = {exercise: this.props, navigate: ""};

		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		event.preventDefault();
		const navigate = event.target.name;

		if (event.target.name === "edit") {
			this.setState({navigate: navigate});
		} else if (event.target.name === "book-work") {
			this.setState({navigate: navigate});
		}
	}

	render() { //{ = ({ id, type, exam, deadline, timeNeed, timeWorked }) =>
		const { navigate } = this.state;
		if (navigate === "edit") {
			return <Redirect to="/editExercise" push={true}/>
		} else if (navigate === "book-work") {
			return <Redirect to="/bookExercise" push={true}/>
		}
		return (
			<tr className="exercise">
				<td>{this.props.type}</td>
				<td>{this.props.exam}</td>
				<td>{this.props.timeWorked}</td>
				<td>{this.props.timeNeed}</td>
				<td>{this.props.deadline}</td>
				<td>
					<Row>
						<Col>
							<Button name="edit" onClick={this.onClick}>Bearbeiten</Button>
						</Col>
						<Col>
							<Button name="book-work" onClick={this.onClick}>Arbeit buchen</Button>
						</Col>
					</Row>
				</td>
			</tr>
		);
	}
}

Exercise.propTypes = {
	type: PropTypes.string,
	exam: PropTypes.string,
	deadline: PropTypes.string,
	timeNeed: PropTypes.number,
	timeWorked: PropTypes.number
};

export default Exercise;
