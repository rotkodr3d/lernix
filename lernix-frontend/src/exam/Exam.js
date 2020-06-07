import React from "react";

import Button from "react-bootstrap/Button";

/**
 * 
 * Stellt eine Tabellenzeile für Prüfun dar, wenn es im Kontext der Prüfung auswahl ist wird ein extra button eingeblendet
 */

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
