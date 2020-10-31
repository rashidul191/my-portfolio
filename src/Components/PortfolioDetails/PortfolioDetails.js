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
                <div className="text-center text-white mt-5 ">
                    <h6 className=""> MY PORTFOLIO </h6>
                    <h3> CHECK OUT MY RECENT PROJECT </h3>
                </div>
                <div>
                    <div class="card-deck">
                        <div class="card">
                            <a href="https://creative-agency-rashidul.netlify.app/">  <img class="card-img-top" src={creativeAgency} alt="Card image cap" /> </a>
                            <div class="card-body">
                                <h5 class="card-title">Create Agency (Full-Stack)</h5>
                                <p class="card-text">A full stack IT-Service provider web application. If the user wants, can select a particular course and add feedback.The web app shows different types of options for a user and admin.Admin can add a new type of course and show all user lists.</p>
                            </div>
                            <div class="card-footer">
                                <div className="text-center">
                                    <a href="https://creative-agency-rashidul.netlify.app/">  <button className="site-link-btn mr-2">WebSite</button> </a>
                                    <a href="https://github.com/rashidul191/creative-agency-client"> <button className="site-link-btn">GitHub</button> </a>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <a href="https://volunteer-network-main.netlify.app/">  <img class="card-img-top" src={volentarNetwork} alt="Card image cap" /> </a>
                            <div class="card-body">
                                <h5 class="card-title">VOLUNTEER NETWORK (Full-Stack)</h5>
                                <p class="card-text">A full-stack social service provider web application.A single page web application with a dashboard for a volunteer community.Users can volunteer for a task.Admins can see the volunteer tasks and change/delete them.</p>
                            </div>
                            <div class="card-footer">
                                <div className="text-center">
                                    <a href="https://volunteer-network-main.netlify.app/">  <button className="site-link-btn mr-2">WebSite</button> </a>
                                    <a href="https://github.com/rashidul191/volunteer-network-main"> <button className="site-link-btn">GitHub</button> </a>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                          <a href="https://travel-guru-net.netlify.app/">  <img src={travelGuru} class="card-img-top" alt="..." /> </a>
                            <div class="card-body">
                                <h5 class="card-title">TRAVEL GURU</h5>
                                <p class="card-text">A travel guru hotel agency web application. A demo web app for booking hotels of 3 different spots. Users can select any spot for booking with a signup process. The hotel suggestion is given according to the selected spot.</p>
                            </div>
                            <div class="card-footer">
                                <div className="text-center">
                                    <a href="https://travel-guru-net.netlify.app">  <button className="site-link-btn mr-2">WebSite</button> </a>
                                    <a href="https://github.com/rashidul191/travel-guru"> <button className="site-link-btn">GitHub</button> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
       

        </section>
    );
};

export default PortfolioDetails;