import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Service from '../Service/Service';
import Skill from '../Skill/Skill';
import Tutorial from '../Tutorial/Tutorial';
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
            <div>
                <Tutorial></Tutorial>
            </div>
            <div>
                <Service></Service>
            </div>
            <div>
                <Skill></Skill>
            </div>


            <div>
                <Footer></Footer>
            </div>


        </section>
    );
};

export default Home;