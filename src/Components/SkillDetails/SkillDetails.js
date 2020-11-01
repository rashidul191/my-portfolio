import React from 'react';
import './SkillDetails.css';
import JavaScript from '../../Images/Icons/javascript.png';
import reactIcon from '../../Images/Icons/React-icon.png';
import Node from '../../Images/Icons/nodejs.png';
import Html from '../../Images/Icons/html5-icon.png';
import Css from '../../Images/Icons/css-icon.png';
import Bootstrap from '../../Images/Icons/Bootstrap.png';
import express from '../../Images/Icons/Expressjs-icon.png';
import MongoDB from '../../Images/Icons/mongodb-icon.png';
import HeroKu from '../../Images/Icons/heroku-icon.png';
import npm from '../../Images/Icons/npm-icon.png';
import vsCode from '../../Images/Icons/Visual_Studio-icon.png';
import firebaseIcon from '../../Images/Icons/firebase-icon.png';
import reactBootstrap from '../../Images/Icons/react-bootstrap-tutorial.png';
import materialUi from '../../Images/Icons/material-ui.png';
import Java from '../../Images/Icons/java-icon.png';
import cProgramming from '../../Images/Icons/c-programming-icon.png';
import msWord from '../../Images/Icons/microsoft-word-.png';
import msExcel from '../../Images/Icons/microsoft-excel.png';
import msPowerPoint from '../../Images/Icons/ms-powerpoint.png';


const SkillDetails = () => {
    return (
        <section>
            <div className=" skill-details-header mt-5">
                <div className="pt-4">
                    <h3>My Skill</h3>
                </div>
            </div>
            <div className="container">
                <div>
                    <div className=" pt-5">
                        <h3>DEVELOPER SKILLS</h3>
                        <div className="pb-5 pt-2">
                            <div className="skill-header-part">

                                <div className="row">
                                    <div className="col-md-4  img-size ">
                                        <img className="skill-icon-size mt-2" src={JavaScript} alt="" />
                                        <h6>JavaScript</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={reactIcon} alt="" />
                                        <h6>React</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={Node} alt="" />
                                        <h6>Node.js</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={Html} alt="" />
                                        <h6>HTML</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={Css} alt="" />
                                        <h6>CSS</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={Bootstrap} alt="" />
                                        <h6>Bootstrap</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={express} alt="" />
                                        <h6>Express.js</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={MongoDB} alt="" />
                                        <h6>MongoDB</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={HeroKu} alt="" />
                                        <h6>HeroKu</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={npm} alt="" />
                                        <h6>npm</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={vsCode} alt="" />
                                        <h6>VS Code</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={firebaseIcon} alt="" />
                                        <h6>Firebase</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4  img-size">
                                        <img className="skill-icon-size mt-2" src={reactBootstrap} alt="" />
                                        <h6>React Bootstrap</h6>
                                    </div>
                                    <div className="col-md-4  img-size">
                                    <img className="skill-icon-size mt-2" src={materialUi} alt="" />
                                    <h6>Material-Ui</h6>
                                       
                                    </div>
                                    <div className="col-md-4  img-size">
                                    <img className="skill-icon-size mt-2" src={Java} alt="" />
                                    <h6>Java</h6>
                                       
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="pt-3 pb-5">

                        <div>
                            <h3>OTHER EXPERIENCE</h3>
                            <div className="row">
                                <div className="col-md-4  img-size">
                                    <img className="skill-icon-size mt-2" src={msWord} alt="" />
                                    <h6>MS Word</h6>
                                </div>
                                <div className="col-md-4  img-size">
                                <img className="skill-icon-size mt-2" src={msExcel} alt="" />
                                        <h6>MS Excel</h6>
                                </div>
                                <div className="col-md-4  img-size">
                                <img className="skill-icon-size mt-2" src={msPowerPoint} alt="" />
                                        <h6>MS PowerPoint</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section >
    );
};

export default SkillDetails;