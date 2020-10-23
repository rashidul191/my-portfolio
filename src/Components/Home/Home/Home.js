import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <section>
            <div className="nav-style">
                <Navbar></Navbar>
            </div>
            <div>
                <Header></Header>
            </div>
            <div>
                <About></About>
            </div>


        </section>
    );
};

export default Home;