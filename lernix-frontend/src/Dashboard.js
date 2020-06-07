import React, { Component } from "react";

class Dashboard extends Component {

	constructor(props) {
		super(props);
		console.log(this.props);
	}
	render() {
		return(
		<div>
			<h1 className="mt-5">Dashboard</h1>
			<div className="mt-5">
				<h2>Hallo {this.props.user.username}!</h2>
				<h2>Heute schon was für's Studium getan?</h2>
			</div>
		</div>
		);
	}
}

export default Dashboard;