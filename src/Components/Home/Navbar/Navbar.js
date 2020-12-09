import React from 'react';
import './Navbar.css';
import logo from '../../../Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="sticky-top">
            <div className="nav-style ">
                <div className="container ">
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <Link to="/"> <a class="navbar-brand" href="#"><img className="main-logo" src={logo} alt="" /></a> </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item mr-3 active pt-2">
                                    <Link to="/home"> <a class="nav-link nav-text">HOME </a> </Link>
                                </li>

                                <li class="nav-item mr-3 active pt-2">
                                    <Link to="/about"> <a class="nav-link nav-text">ABOUT </a> </Link>
                                </li>

                                <li class="nav-item mr-3 active pt-2">
                                    <Link to="/skill"> <a class="nav-link nav-text">SKILL</a> </Link>
                                </li>

                                <li class="nav-item mr-3 active pt-2">
                                    <Link to="/service"> <a class="nav-link nav-text">SERVICE</a> </Link>
                                </li>



                                <li class="nav-item mr-3 active pt-2" >
                                    <Link to="/portfolio"> <a class="nav-link nav-text">PORTFOLIO</a> </Link>
                                </li>



                                <li class="nav-item mr-3 active pt-2" >
                                    <Link to="/blog"> <a class="nav-link nav-text">BLOG </a> </Link>
                                </li>



                                <li class="nav-item mr-3 active pt-2" >
                                    <Link to="/contact-me"> <a class="nav-link nav-text">CONTACT ME </a> </Link>
                                </li>

                                <li class="nav-item mr-3 active" >
                                    <Link to="/resume"> <a class="nav-link nav-text "> <button className="resume-btn">GET RESUME</button> </a> </Link>
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