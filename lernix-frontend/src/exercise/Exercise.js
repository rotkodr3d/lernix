import React from "react";
import PropTypes from "prop-types";

const Exercise = ({ type, exam, deadline, timeNeed, timeWorked }) => {
	return (
		<tr className="exercise">
			<td>{type}</td>
			<td>{exam}</td>
			<td>{timeWorked}</td>
			<td>{timeNeed}</td>
			<td>{deadline}</td>
		</tr>
	);
};

Exercise.propTypes = {
	type: PropTypes.string,
	exam: PropTypes.string,
	deadline: PropTypes.string,
	timeNeed: PropTypes.number,
	timeWorked: PropTypes.number
};

export default Exercise;
