import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Resume from './Components/Resume/Resume';
import About from './Components/Home/About/About';
import Navbar from './Components/Home/Navbar/Navbar';
import Footer from './Components/Home/Footer/Footer';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Home></Home>
          <Footer></Footer>
        </Route>
        
        <Route path="/home">
          <Navbar></Navbar>
          <Home></Home>
          <Footer></Footer>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/resume">
          <Navbar></Navbar>
          <Resume></Resume>
          <Footer></Footer>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
