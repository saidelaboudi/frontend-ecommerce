import React from 'react'

const Section = () => {
	return (
		<>
			<div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="mask flex-center">
							<div class="container">
								<div class="row align-items-center">
									<div class="col-md-7 col-12 order-md-1 order-2">
										<h4>ENVY LAPTOPS</h4>
										<p>Le HP Envy 13 est un ordinateur portable sous Windows 10 de 13,3 pouces de diagonale (IPS LCD, Full HD) dont le format est un ultrabook assez haut de gamme. Il intègre un châssis entièrement en aluminium et le clavier se surélève légèrement lorsqu'il est ouvert. Du côté des connectiques, il intègre un port USB Type-C 3.1, deux ports USB Type-A 3.1, un port microSD, un port jack ainsi qu’un port secteur pour la recharge.

											.</p> <br /> <a href="https://www.hp.com/in-en/shop/laptops-tablets/personal-laptops/envy-laptops.html">SITE OFFICIEL</a>
									</div>
									<div class="col-md-5 col-12 order-md-2 order-1">
										<img src="https://i.imgur.com/iDwDQ4o.png" class="mx-auto" alt="slide" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">  <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">  <span class="sr-only">Next</span> </a>
			</div>
		</>
	);
}
export default Section;