import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

class Login extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			email: "",
			password: "",
			loginErrors: ""
		} 

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		const { user_name, password } = this.state;
		const bodystr = "username=" + user_name + "&password=" + password;
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			credentials: 'include',
			body: bodystr
		}
		
		console.log("login?", requestOptions);
		fetch("/process_login", requestOptions)
			.then((response) => {
				console.log(response);
				// if (response.formData.status === "") {

				// }
			}).catch((error) => {
				console.log("login error", error);
		});
	}

	render() {
		const registrationSuccessful = this.props.location.search;
		return(
			<div>
				{registrationSuccessful === "?registrationSuccessful" ? <Alert variant="success">Registrierung war erfolgreich! Logg dich doch gleich ein!</Alert> : <></>}
				<Form onSubmit={this.handleSubmit}>
					<Form.Group as={Row}>
						<Form.Label column md="3">Username</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="user_name" name="user_name" type="text" placeholder="" onChange={this.handleChange}></Form.Control>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column md="3">Passwort</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="password" name="password" type="password" placeholder="" onChange={this.handleChange}></Form.Control>
						</Col>
					</Form.Group>
					<Button variant="primary" type="submit">
						Anmelden
					</Button>
				</Form>
			</div>
		)
	}
} 

export default Login;