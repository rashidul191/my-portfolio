import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router >
      <Switch>
        <Home></Home>
      </Switch>

    </Router>
  );
}

export default App;
