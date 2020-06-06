import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home"; 
import Navigation from "./Navigation";
import AddExercise from "./exercise/AddExercise";
import ShowExercise from "./exercise/ShowExercise";
import ShowExercises from "./exercise/ShowExercises";
import ShowExams from "./exam/ShowExams";
import ChooseExam from "./exam/ChooseExam";

import logo from './logo.svg';
import './App.css';
import CreateExam from './exam/CreateExam';
import Registration from './auth/Registration';
import Login from './auth/Login';

const App = () => (
  <BrowserRouter>
    <div className="">
        <Navigation/>
        <div className="container">
          <div>
            <Switch>
              <Route path="/addExercise" component={AddExercise}/>
              <Route path="/exercises" component={ShowExercises}/>
              <Route path="/chooseExam" component={ChooseExam}/>
              <Route path="/createExam" component={CreateExam}/>
              <Route path="/exams" component={ShowExams}/>
              <Route path="/register" component={Registration}/>
              <Route path="/Login.html" component={Login}/>
              <Route exact path="/" component={Home}/>
            </Switch>
          </div>
        </div>
    </div>
  </BrowserRouter>
)

export default App;