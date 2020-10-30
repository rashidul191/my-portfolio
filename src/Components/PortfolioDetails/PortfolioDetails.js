import React from 'react';
import creativeAgency from '../../Images/My Work Projects/creative-agency.png';
import volentarNetwork from '../../Images/My Work Projects/volenter-network.png';
import travelGuru from '../../Images/My Work Projects/traval-guru.png';
import './PortfolioDetails.css';

const PortfolioDetails = () => {
    return (
        <section>
                <div className=" portfolio-header mt-5 pt-4 ">
                    <h3> MY PORTFOLIO </h3>
                </div>
            
            <div className="container pb-5">

                <div class="card-deck pt-5">
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



            </div>

        </section>
    );
};

export default PortfolioDetails;