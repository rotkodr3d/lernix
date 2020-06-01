import React from "react";
import PropTypes from "prop-types";

const Exercise = ({ type, exam }) => {
	return (
		<div className="exercise">
			<h3>{type} zur Prüfung {exam}</h3>
		</div>
	);
};

Exercise.propTypes = {
	type: PropTypes.string,
	exam: PropTypes.string,
};

export default Exercise;
