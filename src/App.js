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
import NoMatch from './Components/NoMatch/NoMatch';
import SkillDetails from './Components/SkillDetails/SkillDetails';
import ContactMe from './Components/ContactMe/ContactMe';

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
          <Navbar></Navbar>
          <About></About>
          <Footer></Footer>
        </Route>

        <Route path="/skill">
          <Navbar></Navbar>
          <SkillDetails></SkillDetails>
          <Footer></Footer>
        </Route>

        <Route path="/resume">
          <Navbar></Navbar>
          <Resume></Resume>
          <Footer></Footer>
        </Route>

        <Route path="/contact-me">
          <Navbar></Navbar>
          <ContactMe></ContactMe>
          <Footer></Footer>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
