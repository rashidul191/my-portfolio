import React from 'react';
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


        </section>
    );
};

export default Home;