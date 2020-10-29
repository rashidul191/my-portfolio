import React from 'react';
import './Portfolio.css';
import creativeAgency from '../../Images/My Work Projects/creative-agency.png';
import volentarNetwork from '../../Images/My Work Projects/volenter-network.png';
import travelGuru from '../../Images/My Work Projects/traval-guru.png';


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
                        <img class="card-img-top" src={creativeAgency} alt="Card image cap" />

                    </div>
                    <div class="card">
                        <img class="card-img-top" src={volentarNetwork} alt="Card image cap" />

                    </div>
                    <div class="card">
                        <img class="card-img-top" src={travelGuru} alt="Card image cap" />

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;