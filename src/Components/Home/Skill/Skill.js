import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Skill.css';

const Skill = () => {
    return (
        <section className="skill-area">
            <div className="container  ">
                <div className="text-center text-white ">
                    <h6 className="pt-5">Skill</h6>
                    <h3>Why Choose Me</h3>
                   
                </div>
                <div>
                    <div className="row ">
                        <div className="col-md-6 ">
                            <small> <h6 className="text-white">JavaScript</h6> </small>
                            <ProgressBar variant="danger" now={90} label={'95%'} />

                        </div>
                        <div className="col-md-6 pt-3">
                            <small> <h6 className="text-white">React</h6> </small>
                            <ProgressBar variant="danger" now={95} label={'95%'} />

                        </div>
                        <div className="col-md-6 pt-3">
                            <small> <h6 className="text-white">Node.js</h6> </small>
                            <ProgressBar variant="danger" now={85} label={'85%'} />

                        </div>
                        <div className="col-md-6 pt-3">
                            <small> <h6 className="text-white">MongoDB</h6> </small>
                            <ProgressBar variant="danger" now={85} label={'85%'} />

                        </div>
                    </div>

                    <div className="text-center pb-5 pt-5">
                        <Link to="/skill"> <button className="learn-more-btn" >Learn More</button> </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;