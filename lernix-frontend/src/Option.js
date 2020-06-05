import React from "react";

const Option = ({value, text, callBack}) => {
	return(
		<option value={value} onChange={callBack}>{text}</option>
	);
}

export default Option;