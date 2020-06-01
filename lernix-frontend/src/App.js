import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home"; 
import Navigation from "./Navigation";
import AddExercise from "./exercise/AddExercise";
import ShowExercise from "./exercise/ShowExercise";
import ShowExercises from "./exercise/ShowExercises";

import logo from './logo.svg';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Lernix</h1>
        <Navigation/>
      </header>
      <div>
        <Switch>
          <Route path="/addExercise" component={AddExercise}/>
          <Route path="/exercises" component={ShowExercises}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
)

export default App;