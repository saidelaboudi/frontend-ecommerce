import React from 'react';

const Header = () => {
    return (
        <header className="header shop">
		<div className="topbar">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-12">
						<div className="top-left">
							<ul className="list-main">
								<li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
								<li><i className="ti-email"></i> support@shophub.com</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-8 col-md-12 col-12">
						<div className="right-content">
							<ul className="list-main">
								<li><i className="ti-location-pin"></i> Store location</li>
								<li><i className="ti-alarm-clock"></i> <a href="www.google.com">Daily deal</a></li>
								<li><i className="ti-user"></i> <a href="www.google.com">My account</a></li>
								<li><i className="ti-power-off"></i><a href="login.html">Login</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="middle-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-12">
						<div className="logo">
							<a href="index.html"><img src="images/logo.png" alt="logo"/></a>
						</div>
						<div className="search-top">
							<div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
							<div className="search-top">
								<form className="search-form">
									<input type="text" placeholder="Search here..." name="search"/>
									<button value="search" type="submit"><i className="ti-search"></i></button>
								</form>
							</div>
						</div>
						<div className="mobile-nav"></div>
					</div>
					<div className="col-lg-8 col-md-7 col-12">
						<div className="search-bar-top">
							<div className="search-bar">
								<select>
									<option value="selected">All Category</option>
									<option>watch</option>
									<option>mobile</option>
									<option>kid’s item</option>
								</select>
								<form>
									<input name="search" placeholder="Search Products Here....." type="search"/>
									<button className="btnn"><i className="ti-search"></i></button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-3 col-12">
						<div className="right-bar">
							<div className="sinlge-bar">
								<a href="www.google.com" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
							</div>
							<div className="sinlge-bar">
								<a href="www.google.com" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
							</div>
							<div className="sinlge-bar shopping">
								<a href="www.google.com" className="single-icon"><i className="ti-bag"></i> <span className="total-count">2</span></a>
								<div className="shopping-item">
									<div className="dropdown-cart-header">
										<span>2 Items</span>
										<a href="www.google.com">View Cart</a>
									</div>
									<ul className="shopping-list">
										<li>
											<a href="www.google.com" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
											<a className="cart-img" href="www.google.com"><img src="https://via.placeholder.com/70x70" alt="#"/></a>
											<h4><a href="www.google.com">Woman Ring</a></h4>
											<p className="quantity">1x - <span className="amount">$99.00</span></p>
										</li>
										<li>
											<a href="www.google.com" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
											<a className="cart-img" href="www.google.com"><img src="https://via.placeholder.com/70x70" alt="#"/></a>
											<h4><a href="www.google.com">Woman Necklace</a></h4>
											<p className="quantity">1x - <span className="amount">$35.00</span></p>
										</li>
									</ul>
									<div className="bottom">
										<div className="total">
											<span>Total</span>
											<span className="total-amount">$134.00</span>
										</div>
										<a href="checkout.html" className="btn animate">Checkout</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="header-inner">
			<div className="container">
				<div className="cat-nav-head">
					<div className="row">
						<div className="col-lg-3">
							<div className="all-category">
								<h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
								<ul className="main-category">
									<li><a href="www.google.com">New Arrivals <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										<ul className="sub-category">
											<li><a href="www.google.com">accessories</a></li>
											<li><a href="www.google.com">best selling</a></li>
											<li><a href="www.google.com">top 100 offer</a></li>
											<li><a href="www.google.com">sunglass</a></li>
											<li><a href="www.google.com">watch</a></li>
											<li><a href="www.google.com">man’s product</a></li>
											<li><a href="www.google.com">ladies</a></li>
											<li><a href="www.google.com">westrn dress</a></li>
											<li><a href="www.google.com">denim </a></li>
										</ul>
									</li>
									<li className="main-mega"><a href="www.google.com">best selling <i className="fa fa-angle-right" aria-hidden="true"></i></a>
										<ul className="mega-menu">
											<li className="single-menu">
												<a href="www.google.com" className="title-link">Shop Kid's</a>
												<div className="image">
													<img src="https://via.placeholder.com/225x155" alt="#"/>
												</div>
												<div className="inner-link">
													<a href="www.google.com">Kids Toys</a>
													<a href="www.google.com">Kids Travel Car</a>
													<a href="www.google.com">Kids Color Shape</a>
													<a href="www.google.com">Kids Tent</a>
												</div>
											</li>
											<li className="single-menu">
												<a href="www.google.com" className="title-link">Shop Men's</a>
												<div className="image">
													<img src="https://via.placeholder.com/225x155" alt="#"/>
												</div>
												<div className="inner-link">
													<a href="www.google.com">Watch</a>
													<a href="www.google.com">T-shirt</a>
													<a href="www.google.com">Hoodies</a>
													<a href="www.google.com">Formal Pant</a>
												</div>
											</li>
											<li className="single-menu">
												<a href="www.google.com" className="title-link">Shop Women's</a>
												<div className="image">
													<img src="https://via.placeholder.com/225x155" alt="#"/>
												</div>
												<div className="inner-link">
													<a href="www.google.com">Ladies Shirt</a>
													<a href="www.google.com">Ladies Frog</a>
													<a href="www.google.com">Ladies Sun Glass</a>
													<a href="www.google.com">Ladies Watch</a>
												</div>
											</li>
										</ul>
									</li>
									<li><a href="www.google.com">accessories</a></li>
									<li><a href="www.google.com">top 100 offer</a></li>
									<li><a href="www.google.com">sunglass</a></li>
									<li><a href="www.google.com">watch</a></li>
									<li><a href="www.google.com">man’s product</a></li>
									<li><a href="www.google.com">ladies</a></li>
									<li><a href="www.google.com">westrn dress</a></li>
									<li><a href="www.google.com">denim </a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-9 col-12">
							<div className="menu-area">
								<nav className="navbar navbar-expand-lg">
									<div className="navbar-collapse">	
										<div className="nav-inner">	
											<ul className="nav main-menu menu navbar-nav">
													<li className="active"><a href="www.google.com">Home</a></li>
													<li><a href="www.google.com">Product</a></li>												
													<li><a href="www.google.com">Service</a></li>
													<li><a href="www.google.com">Shop<i className="ti-angle-down"></i><span className="new">New</span></a>
														<ul className="dropdown">
															<li><a href="shop-grid.html">Shop Grid</a></li>
															<li><a href="cart.html">Cart</a></li>
															<li><a href="checkout.html">Checkout</a></li>
														</ul>
													</li>
													<li><a href="www.google.com">Pages</a></li>									
													<li><a href="www.google.com">Blog<i className="ti-angle-down"></i></a>
														<ul className="dropdown">
															<li><a href="blog-single-sidebar.html">Blog Single Sidebar</a></li>
														</ul>
													</li>
													<li><a href="contact.html">Contact Us</a></li>
												</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    );
}

export default Header ;