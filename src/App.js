import React, { Component } from 'react';
import './App.css';
import Login from './container/Login';
import {BrowserRouter, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Home from './container/Home';
import Question from './container/QuestionAdd';
import Editor from './container/Editor';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home}/> 
        <Route path="/question" exact component={Question}/> 
        <Route path="/editor" exact component={Editor}/> 
        </div>       
      </BrowserRouter>
    );
  }
}

export default App;
