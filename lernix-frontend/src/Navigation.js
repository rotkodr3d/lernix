import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
	<nav className="navigation-container">
		<ul className="navigation">
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/addExercise">Add Exercise</NavLink>
			</li>
			<li>
				<NavLink to="/exercises">Show Exercises</NavLink>
			</li>
		</ul>
	</nav>
);

export default Navigation;
