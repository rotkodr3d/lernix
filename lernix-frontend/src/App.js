import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home";
import Navigation from "./Navigation";
import AddExercise from "./exercise/AddExercise";
import ShowExercises from "./exercise/ShowExercises";
import ShowExams from "./exam/ShowExams";
import ChooseExam from "./exam/ChooseExam";

import logo from './logo.svg';
import './App.css';
import CreateExam from './exam/CreateExam';
import Registration from './auth/Registration';
import Login from './auth/Login';
import ExerciseDetails from './exercise/ExerciseDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    }

    fetch("/get/logged_in", requestOptions).then((response) => {
      return response.json();
    }).then((json) => { 
      if (json.authenticated && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
        console.log("is logged in");
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: json.principal
        })
      } else if (!json.authenticated && this.state.loggedInStatus === "LOGGED_IN") {
        console.log("is not logged in");
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }   
    });
      
    //   console.log(response);
    // }).catch((error) => console.log(error));
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navigation />
          <div className="container">
            <div>
              <Switch>
                <Route path="/addExercise" render={props => (
                  <AddExercise {...props} loggedInStatus={this.state.loggedInStatus} />
                )} />
                <Route path="/exercises" render={props => (
                  <ShowExercises {...props} loggedInStatus={this.state.loggedInStatus} />
                )} />
                <Route path="/chooseExam" render={props => (
                  <ChooseExam {...props} loggedInStatus={this.state.loggedInStatus} />
                )} />
                <Route path="/createExam" render={props => (
                  <CreateExam {...props} loggedInStatus={this.state.loggedInStatus} />
                )} />
                <Route path="/exams" render={props => (
                  <ShowExams {...props} loggedInStatus={this.state.loggedInStatus} />
                )} />
                <Route path="/exerciseDetails" render={props => (
                  <ExerciseDetails {...props} loggedInStatus={this.state.loggedInStatus} />
                )} />
                <Route exact path={"/"} render={props => (
                  <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                )} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;