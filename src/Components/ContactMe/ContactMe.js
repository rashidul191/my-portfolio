import React from 'react';
import { useForm } from "react-hook-form";
import './ContactMe.css';

const ContactMe = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section>

            <div className="contact-me-header mt-5 pt-4">
                <h3>Contact Me</h3>
            </div>
            <div className="container pt-5 pb-5">
                <div className="row">

                    <div className="col-md-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Name:*</label>
                                <input type="text" class="form-control" name="name" ref={register({ required: true })} placeholder="Name / Company name" />
                                {errors.name && <span className="error-text">This field is required</span>}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Email:*</label>
                                <input type="email" class="form-control" name="email" ref={register({ required: true })} placeholder="email@gmail.com" />
                                {errors.email && <span className="error-text">This field is required</span>}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Phone:*</label>
                                <input type="text" class="form-control" name="phone" ref={register({ required: true })} placeholder="Enter phone number" />
                                {errors.phone && <span className="error-text">This field is required</span>}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Type your massage</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <input className="send-btn" type="submit" value="Send" />
                        </form>

                    </div>
                    <div className="col-md-4">
                        <div className="address-me">
                            <div className="address-box">
                                <h3>Address</h3>
                                <h5>Mirpur, Dhaka, Bangladesh</h5>
                            </div>
                            <div className="address-box">
                                <h3>Phone</h3>
                                <h5>+880 1629 22 60 69</h5>
                            </div>
                            <div className="address-box">
                                <h3>Email</h3>
                                <h5>md.rashidul371@gmail.com</h5>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;