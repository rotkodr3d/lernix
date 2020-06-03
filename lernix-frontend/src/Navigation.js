import React, {Component} from "react";
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class Navigation extends Component {
	render() {
		return(
			<Navbar bg="light" expand="lg">
				<Navbar.Brand as={Link} to="/">Lernix</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavDropdown title="Prüfungen">
							<NavDropdown.Item as={Link} to="/exams">
								anzeigen
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/chooseExam">
								hinzufügen
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Aufgaben">
							<NavDropdown.Item as={Link} to="/exercises">
								anzeigen
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/addExercises">
								hinzufügen
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Lernerinnerung">
							<NavDropdown.Item as={Link} to="/learnReminders">
								anzeigen
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/createLearnReminder">
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
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;
