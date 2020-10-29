import React from 'react';
import './Service.css';
import { Card, CardDeck } from 'react-bootstrap';
import webDevelopment from '../../../Images/Icons/WebDevolepment.png';
import videoEdit from '../../../Images/Icons/Video Editng.png';
import photoShop from '../../../Images/Icons/Photoshop.png';
import productReview from '../../../Images/Icons/Product Review.png';


const Service = () => {
    return (
        <section className="service-area">
            <div className="container ">
                <div className="text-center pt-5">
                    <h6>Service</h6>
                    <h3>What I Do</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem esse, voluptates molestiae hic tenetur beatae recusandae. Quidem culpa eveniet deleniti, praesentium nulla distinctio est ipsam nesciunt repellat illo, eius eos?</p>
                </div>
                <div className="mt-5">
                    <CardDeck>
                        <Card >                            
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={webDevelopment} alt=""/>
                                <Card.Title className="mt-3">Web Development</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>                           
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={videoEdit} alt=""/>
                                <Card.Title className="mt-3">Video Editing</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>                            
                            <Card.Body className="text-center service-card">
                                <img className="service-img-size" src={photoShop} alt=""/>
                                <Card.Title className="mt-3">PhotoShop</Card.Title>
                            </Card.Body>
                        </Card>

                        <Card>                           
                            <Card.Body className="text-center service-card">
                                <img  className="service-img-size" src={productReview} alt=""/>
                                <Card.Title className="mt-3">Product Review</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        </section>
    );
};

export default Service;