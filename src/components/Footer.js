import axios from 'axios';
import React from 'react';

const HOST =  process.env.HOST ;

const Footer = () => {
    var contact = {
        "id": 1,
        "phoneNumber": "+212 573 904 066",
        "email": "said@support.com",
        "address": "adress xy ville z",
        "aboutUs": "Nous somme xyz"
    };
    axios.get(HOST + '/api/contactUs/get').then((response) => {
        contact = response.data
    });

    return (
        <footer className="footer">
            <div className="footer-top section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="single-footer about">
                                <div className="logo">
                                    <a href="/#"><img src="images/logo2.png" alt="#" /></a>
                                </div>
                                <p className="text">{contact.phoneNumber}</p>
                                <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">{contact.phoneNumber}</a></span></p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer links">
                                <h4>Information</h4>
                                <ul>
                                    <li><a href="/#">About Us</a></li>
                                    <li><a href="/#">Faq</a></li>
                                    <li><a href="/#">Terms & Conditions</a></li>
                                    <li><a href="contactUs">Contact Us</a></li>
                                    <li><a href="/#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer links">
                                <h4>Customer Service</h4>
                                <ul>
                                    <li><a href="/#">Payment Methods</a></li>
                                    <li><a href="/#">Money-back</a></li>
                                    <li><a href="/#">Returns</a></li>
                                    <li><a href="/#">Shipping</a></li>
                                    <li><a href="/#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer social">
                                <h4>Get In Tuch</h4>
                                <div className="contact">
                                    <ul>
                                        <li>{contact.address}</li>
                                        <li>{contact.email}</li>
                                        <li>{contact.phoneNumber}</li>
                                    </ul>
                                </div>
                                <ul>
                                    <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                    <li><a href="/#"><i className="ti-twitter"></i></a></li>
                                    <li><a href="/#"><i className="ti-flickr"></i></a></li>
                                    <li><a href="/#"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;