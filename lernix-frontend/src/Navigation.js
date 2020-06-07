import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navigation extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Navbar bg="light" expand="lg">
				<Navbar.Brand as={Link} to="/">Lernix</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						{ (this.props.loggedInStatus === 'LOGGED_IN') ? (
						<>
							<NavDropdown title="Prüfungen">
								<NavDropdown.Item as={Link} to="/exams">
									anzeigen
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/createExam">
									erstellen
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/chooseExam">
									hinzufügen
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Aufgaben">
								<NavDropdown.Item as={Link} to="/exercises">
									anzeigen
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/addExercise">
									hinzufügen
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Lernerinnerung">
								<NavDropdown.Item as={Link} to="/learnreminders">
									anzeigen
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/createLearnreminder">
									anlegen
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Profil">
								<NavDropdown.Item as={Link} to="/showProfile">
									anzeigen
								</NavDropdown.Item>
								<NavDropdown.Item as={Link} to="/logout">
									logout
								</NavDropdown.Item>
							</NavDropdown> 
						</>) : ( <div></div> )}	
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;
