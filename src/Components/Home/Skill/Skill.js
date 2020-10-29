import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Skill.css';

const Skill = () => {
    return (
        <section className="skill-area">
            <div className="container ">
                <div className="text-center pt-5">
                    <h5 className="pt-5">Skill</h5>
                    <h1>Why Choose Me</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, expedita voluptate. Repudiandae commodi quidem amet, natus consequuntur dolorem suscipit, tempora illum odit sapiente quo, distinctio laboriosam? Fuga omnis porro ut.</p>
                </div>
                <div>
                    <div className="row pt-5">
                        <div className="col-md-6 pt-3">
                            <ProgressBar variant="danger" now={90} label={'90%'} />
                            <h5>Web Programming</h5>
                        </div>
                        <div className="col-md-6 pt-3">
                            <ProgressBar variant="danger" now={95} label={'95%'} />
                            <h5>Video Editing</h5>
                        </div>
                        <div className="col-md-6 pt-3">
                            <ProgressBar variant="danger" now={80} label={'80%'} />
                            <h5>PhotoShop</h5>
                        </div>
                        <div className="col-md-6 pt-3">
                            <ProgressBar variant="danger" now={75} label={'75%'} />
                            <h5>Web Design</h5>
                        </div>
                    </div>

                    <div className="text-center pt-5">
                        <Link to="/skill"> <button  className="learn-more-btn" >Learn More</button> </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;