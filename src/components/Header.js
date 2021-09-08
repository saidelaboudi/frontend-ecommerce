import React from 'react';
import Cart from "./Cart";
import { useSelector } from "react-redux";


const Header = () => {
	const categories = useSelector((state) => state.categories.categories);

	return (
		<header className="header shop">
			<div className="middle-inner">
				<div className="container">
					<div className="row">
						<div className="col-lg-2 col-md-2 col-12">
							<div className="logo">
								<a href="/"><img src="images/logo.png" alt="logo" /></a>
							</div>
							<div className="search-top">
								<div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
								<div className="search-top">
									<form className="search-form">
										<input type="text" placeholder="Search here..." name="search" />
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

										{categories.map((category) =>
											<option>{category.name}</option>
										)
										}

									</select>
									<form>
										<input name="search" placeholder="Search Products Here....." type="search" />
										<button className="btnn"><i className="ti-search"></i></button>
									</form>
								</div>
							</div>
						</div>

						<Cart />

					</div>
				</div>
			</div>
			<div className="header-inner">
				<div className="container">
					<div className="cat-nav-head">
						<div className="row">
							<div className="col-lg-3">

								{/* <div className="all-category">
									<h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
									<ul className="main-category">
										<li><a >New Arrivals <i className="fa fa-angle-right" aria-hidden="true"></i></a>
											<ul className="sub-category">
												<li><a >accessories</a></li>
												<li><a >best selling</a></li>
												<li><a >top 100 offer</a></li>
												<li><a >sunglass</a></li>
												<li><a >watch</a></li>
												<li><a >man’s product</a></li>
												<li><a >ladies</a></li>
												<li><a >westrn dress</a></li>
												<li><a >denim </a></li>
											</ul>
										</li>
										<li className="main-mega"><a >best selling <i className="fa fa-angle-right" aria-hidden="true"></i></a>
											<ul className="mega-menu">
												<li className="single-menu">
													<a  className="title-link">Shop Kid's</a>
													<div className="image">
														<img src="https://via.placeholder.com/225x155" alt="#" />
													</div>
													<div className="inner-link">
														<a >Kids Toys</a>
														<a >Kids Travel Car</a>
														<a >Kids Color Shape</a>
														<a >Kids Tent</a>
													</div>
												</li>
												<li className="single-menu">
													<a  className="title-link">Shop Men's</a>
													<div className="image">
														<img src="https://via.placeholder.com/225x155" alt="#" />
													</div>
													<div className="inner-link">
														<a >Watch</a>
														<a >T-shirt</a>
														<a >Hoodies</a>
														<a >Formal Pant</a>
													</div>
												</li>
												<li className="single-menu">
													<a  className="title-link">Shop Women's</a>
													<div className="image">
														<img src="https://via.placeholder.com/225x155" alt="#" />
													</div>
													<div className="inner-link">
														<a >Ladies Shirt</a>
														<a >Ladies Frog</a>
														<a >Ladies Sun Glass</a>
														<a >Ladies Watch</a>
													</div>
												</li>
											</ul>
										</li>
										<li><a >accessories</a></li>
										<li><a >top 100 offer</a></li>
										<li><a >sunglass</a></li>
										<li><a >watch</a></li>
										<li><a >man’s product</a></li>
										<li><a >ladies</a></li>
										<li><a >westrn dress</a></li>
										<li><a >denim </a></li>
									</ul>
								</div> */}


							</div>
							<div className="col-lg-9 col-12">
								<div className="menu-area">
									<nav className="navbar navbar-expand-lg">
										<div className="navbar-collapse">
											<div className="nav-inner">
												<ul className="nav main-menu menu navbar-nav">
													<li className="active"><a href="/">Home</a></li>
													<li><a href="shop-grid">Shop Grid</a></li>
													<li><a href="cart">Cart</a></li>
													<li><a href="checkout">Checkout</a></li>
													<li><a href="/contactUs">Contact Us</a></li>
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

export default Header;