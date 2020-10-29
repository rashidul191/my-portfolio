import React from 'react';
import './Navbar.css';
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section >
            <div className="nav-style">


                <div className="container">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                       <Link to="/"> <a class="navbar-brand" href="#"><img className="main-logo" src={logo} alt="" /></a> </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item mr-3 active">
                                  <Link to="/home"> <a class="nav-link nav-text">HOME </a> </Link>
                                </li>

                                <li class="nav-item mr-3 active">
                                  <Link to="/about"> <a class="nav-link nav-text">ABOUT </a> </Link>
                                </li>

                                <li class="nav-item mr-3 active">
                                   <Link to="/skill"> <a class="nav-link nav-text">SKILL</a> </Link>
                                </li>

                                <li class="nav-item mr-3 active">
                                    <Link to="/service"> <a class="nav-link nav-text">SERVICE</a> </Link>
                                </li>

                                <li class="nav-item mr-3 active" >
                                    <Link to="/resume"> <a class="nav-link nav-text">RESUME</a> </Link>
                                </li>

                                <li class="nav-item mr-3 active" >
                                   <Link to="/blog"> <a class="nav-link nav-text">BLOG </a> </Link>
                                </li>

                                <li class="nav-item mr-3 active" >
                                   <Link to="/contact-me"> <a class="nav-link nav-text">CONTACT ME </a> </Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Navbar;