import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Skill.css';

const Skill = () => {
    return (
        <section className="skill-area">
            <div className="container ">
                <div className="text-center text-white pt-5">
                    <h6 className="pt-5">Skill</h6>
                    <h3>Why Choose Me</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, expedita voluptate. Repudiandae commodi quidem amet, natus consequuntur dolorem suscipit, tempora illum odit sapiente quo, distinctio laboriosam? Fuga omnis porro ut.</p>
                </div>
                <div>
                    <div className="row pt-5">
                        <div className="col-md-6 pt-3">
                            <small> <h6 className="text-white">HTML</h6> </small>
                            <ProgressBar variant="danger" now={90} label={'95%'} />

                        </div>
                        <div className="col-md-6 pt-3">
                            <small> <h6 className="text-white">CSS</h6> </small>
                            <ProgressBar variant="danger" now={95} label={'95%'} />

                        </div>
                        <div className="col-md-6 pt-3">
                            <small> <h6 className="text-white">JavaScript</h6> </small>
                            <ProgressBar variant="danger" now={85} label={'85%'} />

                        </div>
                        <div className="col-md-6 pt-3">
                            <small> <h6 className="text-white">React</h6> </small>
                            <ProgressBar variant="danger" now={85} label={'85%'} />

                        </div>
                    </div>

                    <div className="text-center pt-5">
                        <Link to="/skill"> <button className="learn-more-btn" >Learn More</button> </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;