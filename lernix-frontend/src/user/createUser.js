import { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class CreateUser extends Component {

	constructor() {
		this.state = {
			matNr: "",
			email: "",
			password: ""
		}
	}
	handleSubmit() {

	}

	render() {
		return(
			<Form>
				<Form.Group>
					<Form.Label>Matrikelnummer</Form.Label>
					<Form.Control type="text" placeholder="Deine Matrikelnummer"></Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>E-mail Adresse</Form.Label>
					<Form.Control type="email" placeholder="Deine E-mail Adresse"></Form.Control>
				</Form.Group>
				<Button variant="primary" type="submit">
					Anlegen	
				</Button>
			</Form>
		);
	}
}

export default CreateUser;