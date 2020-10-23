import React from 'react';
import './About.css';
import RashidulImg from '../../../Images/rashiudl1.png';

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="about-me">
                    <h6>Who am i</h6>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis qui, laboriosam suscipit, corrupti adipisci earum fugiat atque quisquam delectus debitis deserunt vero repudiandae? Expedita veniam dicta impedit, assumenda perferendis illum!Laborum esse nobis consequuntur earum perspiciatis vero labore .</p>
                </div>
                <div className="row pt-5">
                    <div className="col-md-8 pt-5">
                        <h2>Md Rashidul Islam</h2>
                        <h5>Web Programmer</h5>
                        <p>Hello everyone,my name is Md Rashidul Islam, consectetur adipiscing elit. Etiam suscipit mi eget dui venenatis posuere. In varius nulla non elementum hendrerit. Suspendisse varius sapien odio, in gravida ipsum luctus id. Ut nisl erat, dignissim sed volutpat at, hendrerit imperdiet purus. Maecenas fringilla, augue sed vulputate ullamcorper, risus lorem facilisis massa, a varius nunc tellus sed odio.</p>
                        <p>Suspendisse fermentum lobortis elit sit amet vehicula. Etiam in dolor vitae leo euismod consequat a vitae ligula.Nunc viverra enim purus, vel luctus ante tempus vel. Vivamus et metus massa. Pellentesque at nulla velit. Morbi pellentesque egestas massa in scelerisque. Vivamus pharetra dolor enim, vel vulputate erat euismod sit amet.</p>
                        <div className="pt-3">
                            <button className="header-btn-cv">DOWNLOAD CV</button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img className="about-me-img" src={RashidulImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;