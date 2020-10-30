import React from 'react';
import './Service.css';
import { Card, CardDeck } from 'react-bootstrap';
import webDevelopment from '../../../Images/Icons/WebDevolepment.png';
import videoEdit from '../../../Images/Icons/Video Editng.png';
import photoShop from '../../../Images/Icons/Photoshop.png';
import productReview from '../../../Images/Icons/Product Review.png';
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <section className="service-area">
            <div className="container ">
                <div className="text-center pt-5">
                    <h6>Service</h6>
                    <h3>What I Do</h3>
                </div>
                <div className="mt-5">
                    <CardDeck>
                        <Card >
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={webDevelopment} alt="" />
                                <Card.Title className="mt-3">Web Development</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={videoEdit} alt="" />
                                <Card.Title className="mt-3">Video Editing</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={photoShop} alt="" />
                                <Card.Title className="mt-3">PhotoShop</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={productReview} alt="" />
                                <Card.Title className="mt-3">Product Review</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
                <div className="text-center pt-5">
                    <Link to="/blog"> <button className="learn-more-btn" >Learn More</button> </Link>
                </div>
            </div>
        </section>
    );
};

export default Service;