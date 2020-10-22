import React from 'react';
import './Navbar.css';
import logo from '../../../Images/logo.png';

const Navbar = () => {
    return (
        <section >
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <a class="navbar-brand" href="#"><img className="main-logo" src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mr-3 active">
                                <a class="nav-link nav-text" href="#">HOME </a>
                            </li>

                            <li class="nav-item mr-3 active">
                                <a class="nav-link nav-text" href="#">ABOUT </a>
                            </li>

                            <li class="nav-item mr-3 active">
                                <a class="nav-link nav-text" href="#">SERVICE </a>
                            </li>

                            <li class="nav-item mr-3 active" >
                                <a class="nav-link nav-text" href="#">PORTFOLIO </a>
                            </li>

                            <li class="nav-item mr-3 active" >
                                <a class="nav-link nav-text" href="#">TESTIMONIAL </a>
                            </li>

                            <li class="nav-item mr-3 active" >
                                <a class="nav-link nav-text" href="#">BLOG </a>
                            </li>

                            <li class="nav-item mr-3 active" >
                                <a class="nav-link nav-text" href="#">CONTACT ME </a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;