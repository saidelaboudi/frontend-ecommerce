import axios from 'axios';
import React from 'react';
import { HOST } from "./Constantes";



const ContactUs = () => {
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
		<section id="contact-us" className="contact-us section">
			<div className="container">
				<div className="contact-head">
					<div className="row">
						<div className="col-lg-8 col-12">
							<div className="form-main">
								<div className="title">
									<h4>rester en contact </h4>
									<h3>Écrivez-nous un message</h3>
								</div>
								<form className="form">
									<div className="row">
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Votre Nom<span>*</span></label>
												<input name="name" type="text" placeholder="" />
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Sujet<span>*</span></label>
												<input name="subject" type="text" placeholder="" />
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Email<span>*</span></label>
												<input name="email" type="email" placeholder="" />
											</div>
										</div>
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<label>Numero de telephne<span>*</span></label>
												<input name="company_name" type="text" placeholder="" />
											</div>
										</div>
										<div className="col-12">
											<div className="form-group message">
												<label>votre message<span>*</span></label>
												<textarea name="message" placeholder=""></textarea>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group button">
												<button type="submit" className="btn ">Envoyer le Message</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className="single-head">
								<div className="single-info">
									<i className="fa fa-phone"></i>
									<h4 className="title">Appelez-nous maintenant :</h4>
									<ul>
										<li><a href="tel:'contact.phoneNumber'">{contact.phoneNumber}</a></li>
									</ul>
								</div>
								<div className="single-info">
									<i className="fa fa-envelope-open"></i>
									<h4 className="title">Email:</h4>
									<ul>
										<li><a href="mailto:`contact.email`">{contact.email}</a></li>
									</ul>
								</div>
								<div className="single-info">
									<i className="fa fa-location-arrow"></i>
									<h4 className="title">Notre Adresse :</h4>
									<ul>
										<li>{contact.address}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUs;