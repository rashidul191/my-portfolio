import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Skill from '../Skill/Skill';
import Tutorial from '../Tutorial/Tutorial';
import './Home.css';

const Home = () => {
    return (
        <section>
            
            <div>
                <Header></Header>
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
            


        </section>
    );
};

export default Home;