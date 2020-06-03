import React from "react";

const Exam = ({ examNr, examName, date, learningTimeNeed }) => {
	return (
		<tr>
			<td>{examNr}</td>
			<td>{examName}</td>
			<td>{date}</td>
			<td>{learningTimeNeed}</td>
		</tr>
	);
}

export default Exam;
