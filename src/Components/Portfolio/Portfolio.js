import React from 'react';
import './Portfolio.css';
import creativeAgency from '../../Images/My Work Projects/creative-agency.png';
import volentarNetwork from '../../Images/My Work Projects/volenter-network.png';
import travelGuru from '../../Images/My Work Projects/traval-guru.png';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    return (
        <section className="container-project pt-5">
            <div className="container pb-5">
                <div className="text-center text-white ">
                    <h6 className=""> MY PORTFOLIO </h6>
                    <h3> CHECK OUT MY RECENT PROJECT </h3>
                </div>
                <div class="card-deck pt-3">
                    <div class="card">
                      <a href="https://creative-agency-rashidul.netlify.app/">  <img class="card-img-top" src={creativeAgency} alt="Card image cap" /> </a>

                    </div>
                    <div class="card">
                      <a href="https://volunteer-network-main.netlify.app/">  <img class="card-img-top" src={volentarNetwork} alt="Card image cap" /> </a>

                    </div>
                    <div class="card">
                     <a href="https://travel-guru-net.netlify.app/">   <img class="card-img-top" src={travelGuru} alt="Card image cap" /></a>

                    </div>
                </div>

               <div className="text-center pt-5">
               <Link to="/portfolio"> <button  className="learn-more-btn" >Learn More</button> </Link>
               </div>

            </div>
        </section>
    );
};

export default Portfolio;