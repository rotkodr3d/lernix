import React, {Component} from "react";

import Button from "react-bootstrap/Button";

/**
 * 
 * Stellt eine Tabellenzeile für Prüfun dar, wenn es im Kontext der Prüfung auswahl ist wird ein extra button eingeblendet
 */

class Exam extends Component {
	constructor(props) {
		super(props);
		this.submitChoosenExam = this.submitChoosenExam.bind(this);
	}

	render() {
		return(
		<tr>
			<td>{this.props.examNr}</td>
			<td>{this.props.examName}</td>
			<td>{this.props.date}</td>
			<td>{this.props.learningTimeNeed}</td>
			{this.props.chooseExam ? <td><div><Button id={this.props.examNr} onClick={this.submitChoosenExam}>Prüfung hinzufügen</Button></div></td> : <></>}
		</tr>
	)}

	submitChoosenExam(e) {
		e.preventDefault();
		console.log(this.props.user.username);

		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				examNr: e.target.id,
				user: this.props.user.username})
		}
		fetch("/post/chooseExam", requestOptions)
			.then((response) => response.json()
			.then((json) => {
				console.log(json["error"])}));
				
	}
}

export default Exam;
