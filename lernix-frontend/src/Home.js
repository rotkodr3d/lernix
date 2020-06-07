import React, { Component } from "react";
import Login from "./auth/Login";

import Dashboard from "./Dashboard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props);

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
	}
	
	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);
		this.props.history.push("/");
	}

	render() {
		return (
			<>
			{
				this.props.loggedInStatus === "LOGGED_IN" ? (
					<Dashboard {...this.props} />
				) : (
				<>
					<Row>
						<h1>Willkommen bei Lernix!</h1>
					</Row>
					<Row>
						<Col>
							<p>Leider mag Spring den Post von dem Formular nicht deshalb bitte über "http://localhost:8080/login" einloggen :/</p>
							<Button as={Link} to="/login">Login</Button>
						</Col>
					</Row>
					<Row className="mt-5">
						<Col>
							<Button as={Link} to="/register">Registrieren</Button>
						</Col>
					</Row>
				</>	
			)}
			</>
		);
	}
}

export default Home;