import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './SkillDetails.css';

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
                            <ul>
                                <div className="row">
                                    <div className="col-md-6 pt-3">
                                        <li> <h5> Expert: </h5></li>
                                        <small><h6> •	 JavaScript</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 React</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> •	 React Native</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 Node.js (Back-End)</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> •	 React Router</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 ES6 </h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> •	 Firebase Authentication</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> •	 HeroKu</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />

                                    </div>

                                    <div className="col-md-6 pt-3">
                                        <li > <h5> Frameworks: </h5></li>
                                        <small><h6> •	 Bootstrap</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 Bootstrap CDN</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> •	 React Bootstrap</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 Material-UI</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> •	 Express.js</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 Bootstrap CDN</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                    </div>

                                    <div className="col-md-6 pt-5">
                                        <li className=""> <h5> Databases: </h5></li>
                                        <small><h6> •	 MongoDB</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> •	 Firebase</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 Oracle</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                    </div>
                                    <div className="col-md-6 pt-5">
                                        <li> <h5> •	 Familiar: </h5></li>
                                        <small><h6> •	 Java</h6></small>
                                        <ProgressBar variant="danger" now={95} label={'95%'} />
                                        <small><h6> C/C++</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                        <small><h6> •	 Heroku</h6></small>
                                        <ProgressBar variant="danger" now={90} label={'90%'} />
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-3 pb-5">

                        <div>
                            <h3>OTHER EXPERIENCE</h3>
                            <div className="pt-3">
                                <small><h6> •	MS Office</h6></small>
                                <ProgressBar variant="danger" now={95} label={'95%'} />
                                <small><h6> •	MS Power Point</h6></small>
                                <ProgressBar variant="danger" now={90} label={'90%'} />
                                <small><h6> •	MS Excel</h6></small>
                                <ProgressBar variant="danger" now={90} label={'90%'} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </section >
    );
};

export default SkillDetails;