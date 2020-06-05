import React from "react";

import Button from "react-bootstrap/Button";

const Exam = ({ examNr, examName, date, learningTimeNeed, chooseExam }) => {
	return (
		<tr>
			<td>{examNr}</td>
			<td>{examName}</td>
			<td>{date}</td>
			<td>{learningTimeNeed}</td>
			{chooseExam ? <td><div><Button>Prüfung hinzufügen</Button></div></td> : <></>}
		</tr>
	);
}

export default Exam;
