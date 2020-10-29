import React from 'react';
import './Resume.css';


const Resume = () => {
    return (
        <section>
            <div className="container mt-5">
                <h1>Md Rashidul Islam</h1>
                <div className="row">
                    <div className="col-md-8">
                        <h5>Web developer</h5>
                        <small>Email: md.rashidul371@gmail.com</small><br />
                        <small>LinkedIn: <a href="https://www.linkedin.com/in/rashidul191/">rashidul191</a></small><br />
                        <small>GitHub: <a href="https://github.com/rashidul191">rashidul191</a></small><br />
                    </div>
                    <div className="col-md-4">
                        <small>Phone: +880 1629 22 60 69</small><br />
                        <small>Address: Mirpur-10, Dhaka, Bangladesh</small><br />
                        <small>Portfolio: <a href="https://rashidul191.netlify.app/">www.rashidul191.com</a></small><br />
                    </div>
                </div>
                <hr />
                <div className="">
                    <p>I am a caring web developer. I have over 6th month experience of web developing and responsive website design. I count myself a hardworking person. I believe that a dynamic and hardworking team can bring success for an organization, after all for human beings.</p>
                </div>
                <div className="">
                    <h4>DEVELOPER SKILLS</h4>
                    <ul>
                        <li>Expert: JavaScript, Node.js (Back-End), ES6, React, React Native, React Router.</li>
                        <li>Frameworks: Bootstrap, Bootstrap CDN, React Bootstrap, Material-UI, Express.js</li>
                        <li>Databases: MongoDB, Firebase, Oracle</li>
                        <li>Familiar: Java, C/C++, Heroku.</li>

                    </ul>
                </div>
                <div className="">
                    <h4>PROJECT EXPERIENCE</h4>
                    <div>
                        <h5>Create Agency (Full-Stack)</h5>
                        <ul>
                            <li><span className="spam-text"> Overview:</span></li>
                            <small> o	A full stack IT-Service provider web application.</small><br />
                            <small> o	If the user can select a particular work and add feedback.</small><br />
                            <small> o	The web app shows different types of options for a user and admin.</small><br />
                            <small> o	Admin can add a new type of course and show all user lists.</small><br />

                            <li><span className="spam-text"> Technology:</span> JavaScript, React, Node.js, Express.js, Bootstrap, Material-UI, MongoDB, Firebase Authentication, Heroku.</li><br />
                            <button className="resume-link-btn"> <a href="https://creative-agency-rashidul.netlify.app/"> WebSite </a></button>
                            <button className="resume-link-btn"> <a href="https://github.com/rashidul191/creative-agency-client"> GitHub (Client) </a></button>
                            <button className="resume-link-btn"> <a href="https://github.com/rashidul191/creative-agency-server"> GitHub (Server) </a></button>

                        </ul>
                    </div>
                    <div className="">
                        <h5>VOLUNTEER NETWORK (Full-Stack)</h5>
                        <ul>
                            <li><span className="spam-text"> Overview:</span></li>
                            <small> o	A full-stack social service provider web application.</small><br />
                            <small> o	A single page web application with a dashboard for a volunteer community.</small><br />
                            <small> o	Users can volunteer for a task.</small><br />
                            <small> o	Admins can see the volunteer tasks and change/delete them.</small><br />

                            <li><span className="spam-text"> Technology:</span> JavaScript, React, Node.js, Express.js, Bootstrap, Material-UI, MongoDB, Firebase Authentication, Heroku.</li><br />
                            <button className="resume-link-btn"> <a href="https://volunteer-network-main.netlify.app/"> WebSite </a></button>
                            <button className="resume-link-btn"> <a href="https://github.com/rashidul191/volunteer-network-main"> GitHub (Client) </a></button>
                            <button className="resume-link-btn"> <a href="https://github.com/rashidul191/volunteer-network-main-server"> GitHub (Server) </a></button>
                        </ul>
                    </div>
                    <div className="">
                        <h5>TRAVEL GURU</h5>
                        <ul>
                            <li><span className="spam-text"> Overview:</span></li>
                            <small> o	A travel guru hotel agency web application.</small><br />
                            <small> o	A demo web app for booking hotels of 3 different spots.</small><br />
                            <small> o	Users can select any spot for booking with a signup process.</small><br />
                            <small> o	The hotel suggestion is given according to the selected spot.</small><br />

                            <li><span className="spam-text"> Technology:</span> JavaScript, React, Bootstrap, Material-UI, Firebase Authentication.</li><br />
                            <button className="resume-link-btn"> <a href="https://travel-guru-net.netlify.app/"> WebSite </a></button>
                            <button className="resume-link-btn"> <a href="https://github.com/rashidul191/travel-guru"> GitHub </a></button>

                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6"> <div className="">
                        <h5>OTHER EXPERIENCE</h5>
                        <ul>
                            <li>MS Office</li>
                            <li>MS Power Point</li>
                            <li>MS Excel</li>
                        </ul>
                    </div>
                        <div className="">
                            <h5>EDUCATION</h5>
                            <small> o    Bachelor of Science in Computer Engineering (CSE) </small><br />
                            <small> o    Green University of Bangladesh, Degum RokeyaSarani, Dhaka </small><br />
                            <small> o    GPA: 3.00 out of 4.00 (6th Semester Running) </small><br />
                            <small> o    Expected Graduation 2023 </small><br />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="">
                            <h5>OTHER ACTIVITIES</h5>
                            <ul>
                                <li>Class representative, department of CSE.</li>
                                <li>Join an intra university programming contest</li>
                            </ul>
                        </div>
                        <div>
                            <h5>LANGUAGES</h5>
                            <ul>
                                <li>Bangla</li>
                                <li>English</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" pt-3 pb-3">
                    <a href="https://drive.google.com/file/d/163zEw4V0DUeRFnh3gcs44hrB3nkc_FR9/view"> <button className="header-btn-cv">  DOWNLOAD CV </button> </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;