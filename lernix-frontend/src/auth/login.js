import React, { Component } from "react";

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

		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({ user: {
				email: email,
				password: password
			}})
		}
		fetch("/login", requestOptions)
			.then((response) => {
				console.log(response);
				// if (response.formData.status === "") {

				// }
			}).catch((error) => {
				console.log(error);
			});
	}

	handleSubmit(event) {
		const { email, password } = this.state;
	}
} 

export default Login;