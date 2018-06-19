import React, { Component } from 'react';
import './App.css';
import Login from './container/Login';
import {BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './container/Home';
import Editor from './container/Editor';

class App extends Component {
  render() {
    return (
      // <div>hi hello</div>
      <Editor/>
      // <Router>
      //   <div>
      //   <Route path="/" exact component={<Login login={false}/>} />
      //   <Route path="/home" exact component={<Home/>}/>  
      //   </div>      
      // </Router>
    );
  }
}

export default App;
