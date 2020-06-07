import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...rest}) => {
	console.log("before return ",rest);
	return (
		<Route {...rest}
		render={props => {
			console.log(props);
			if (rest.loggedInStatus === 'LOGGED_IN') {
				console.log("returning normal component");
				return <Component {...rest} loggedInStatus={rest.loggedInStatus} />
			} else {
				return <Redirect to={
					{
						pathname: "/",
						state: {
						from: props.location
						}
					}
				} />
			}
		}}/>
	)
}

export default ProtectedRoute;