import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import Navigation from "./Navigation";
import AddExercise from "./exercise/AddExercise";
import ShowExercises from "./exercise/ShowExercises";
import ShowExams from "./exam/ShowExams";
import ChooseExam from "./exam/ChooseExam";
import CreateLearnreminder from "./learn-reminder/CreateLearnreminder";

import logo from './logo.svg';
import './App.css';
import CreateExam from './exam/CreateExam';
import Registration from './auth/Registration';
import Login from './auth/Login';
import ExerciseDetails from './exercise/ExerciseDetails';
import ShowLearnreminder from './learn-reminder/ShowLearnreminder';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
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

  componentWillUpdate() {
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
          <Navigation loggedInStatus={this.state.loggedInStatus} />
          <div className="container">
            <div>
              <Switch>
                <ProtectedRoute path="/addExercise" component={AddExercise} {...this.state} />
                <ProtectedRoute path="/exercises" component={ShowExercises} {...this.state} />
                <ProtectedRoute path="/chooseExam" component={ChooseExam} {...this.state} />
                <ProtectedRoute path="/createExam" component={CreateExam} {...this.state} />
                <ProtectedRoute path="/exams" component={ShowExams} {...this.state} />
                <ProtectedRoute path="/exerciseDetails" component={ExerciseDetails} {...this.state} />
                <ProtectedRoute path="/learnreminders" component={ShowLearnreminder} {...this.state} />
                <ProtectedRoute path="/createLearnreminder" component={CreateLearnreminder} {...this.state} />
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Registration}></Route>
                <Route exact path={"/"} render={props => (
                  <Home {...props} user={this.state.user} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
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