import React from 'react'

const Section = () => {
	return (
		<>
			<section className="hero-slider">
				<div className="single-slider">
					<div className="container">
						<div className="row no-gutters">
							<div className="col-lg-9 offset-lg-3 col-12">
								<div className="text-inner">
									<div className="row">
										<div className="col-lg-7 col-12">
											<div className="hero-text">
												<h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
												<p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
												<div className="button">
													<a href="www.google.com" className="btn">Shop Now!</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="small-banner section">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-12">
							<div className="single-banner">
								<img src="https://via.placeholder.com/600x370" alt="#" />
								<div className="content">
									<p>Man's Collectons</p>
									<h3>Summer travel <br /> collection</h3>
									<a href="www.google.com">Discover Now</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12">
							<div className="single-banner">
								<img src="https://via.placeholder.com/600x370" alt="#" />
								<div className="content">
									<p>Bag Collectons</p>
									<h3>Awesome Bag <br /> 2020</h3>
									<a href="www.google.com">Shop Now</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-12">
							<div className="single-banner tab-height">
								<img src="https://via.placeholder.com/600x370" alt="#" />
								<div className="content">
									<p>Flash Sale</p>
									<h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
									<a href="www.google.com">Discover Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Section;