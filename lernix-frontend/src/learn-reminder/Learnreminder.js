import React, { Component } from "react";

class Learnreminder extends Component {

	constructor(props) {
		super(props);
		this.state = {reminder: this.props};
	}

	render() { 
		return (
			<tr className="exercise">
				<td>{this.props.exam}</td>
				<td>{this.props.learningDate}</td>
				<td>{this.props.timeNeed}</td>
				<td>{this.props.timeWorked}</td>
			</tr>
		);
	}
}

export default Learnreminder;
