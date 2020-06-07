import React, { Component } from "react";
import Redirect from "react-router-dom/Redirect";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {
			matNr: "",
			email: "",
			password: "",
			passwordConfirmation: "",
			registrationErrors: "",
			registrationSuccessful: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
		console.log(event.target.value);
	}

	handleSubmit(event) {
		event.preventDefault();
		const { matNr, userName, email, password, passwordConfirmation } = this.state;
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			credentials: 'include',
			body: JSON.stringify({
				matNr: matNr,
				userName: userName,
				email: email,
				password: password,
				passwordConfirmation: passwordConfirmation
			})
		}
		fetch("/post/user", requestOptions)
			.then((response) => {
				console.log("registration: ", response);
				if (response.status === 201) {
					//this.props.handleSuccessfulAuth(response.data);
					this.setState({registrationSuccessful: true});
				}
			}).catch((error) => {
				console.log("registration error: ", error);
			});
	}

	render() {
		return (
			<div>
			{!this.state.registrationSuccessful ? (
				<>
				<h1 className="mt-5">Neues Konto anlegen</h1>
				<Form className="mt-5" onSubmit={this.handleSubmit}>
					<Form.Group as={Row}>
						<Form.Label column md="3">Matrikelnummer</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="matNr" name="matNr" type="text" placeholder="" onChange={this.handleChange}></Form.Control>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column md="3">E-Mail</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="email" name="email" type="email" placeholder="beispiel@email.de" onChange={this.handleChange}></Form.Control>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column md="3">Username</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="userName" name="userName" type="text" placeholder="User Name" onChange={this.handleChange}></Form.Control>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column md="3">Password</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="password" name="password" type="password" placeholder="" onChange={this.handleChange}></Form.Control>
						</Col>
					</Form.Group>
					<Form.Group as={Row}>
						<Form.Label column md="3">Password wiederholen</Form.Label>
						<Col md={{ span: 4, offset: 1 }}>
							<Form.Control id="passwordConfirmation" name="passwordConfirmation" type="password" placeholder="" onChange={this.handleChange}></Form.Control>
						</Col>
					</Form.Group>
					<Button variant="primary" type="submit">
						Registrieren
					</Button>
				</Form>
				</>
			) : (
				<Redirect to="/login/?registrationSuccessful" />
			)}
			</div>
		)
	}
}

export default Registration;