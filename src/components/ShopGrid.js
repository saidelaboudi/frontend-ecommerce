import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setCategories, setCart } from "../redux/action/product-actions"
import Products from './Products';
import axios from 'axios';
import RecentProducts from './RecentProducts';

import { HOST } from "./Constantes";


const ShopGrid = () => {
	const products = useSelector((state) => state.products.products);
	const categories = useSelector((state) => state.categories.categories);
	const dispatch = useDispatch();
	const init = async () => {
		axios.get(HOST + '/api/category').then((response) => {
			dispatch(setCategories(response.data))
		});
		chargeProduct()
	};

	const chargeProduct = async () => {
		axios.get(HOST + '/api/products/all').then((response) => {
			dispatch(setProducts(response.data));
		});
	};

	const chargeProductByCategory = async (category) => {
		await axios.get(HOST + '/api/category/' + category.id).then((res) => {
			if (res.status == 200) {
				let data = res.data
				dispatch(setProducts(data));
			}
		})
	};

	useEffect(() => {
		init()
	}, []
	);

	const AllCategories = () => categories && Object.values(categories).map((category) => {
		const { id, name, description } = category;
		return (
			<li className="nav-item" key={id} >
				<a className="nav-link" id={"Categorie" + id} onClick={() => { chargeProductByCategory({ id, name, description }) }} >
					{name}
				</a>
			</li>
		)
	});

	return (
		<section className="product-area shop-sidebar shop section">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-12">
						<div className="shop-sidebar">
							<div className="single-widget category">
								<h3 className="title">Categories</h3>
								<ul className="categor-list">

									<AllCategories />

								</ul>
							</div>
							<div className="single-widget range">
								<h3 className="title">Shop by Price</h3>
								<div className="price-filter">
									<div className="price-filter-inner">
										<div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
											<div className="ui-slider-range ui-widget-header ui-corner-all" style={{ width: '26 %', left: '24 %' }}></div>
											<span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: '24 %' }}></span>
											<span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: '50 %' }}></span>
										</div>
										<div className="price_slider_amount" >
											<div className="label-input">
												<span>Range:</span><input type="text" id="amount" name="price" placeholder="Add Your Price" />
											</div>
										</div>
									</div>
								</div>

								<ul className="check-box-list">
									<li>
										<label className="checkbox-inline" for="1"><input name="news" id="1" type="checkbox" />$20 - $50<span className="count">(3)</span></label>
									</li>
									<li>
										<label className="checkbox-inline" for="2"><input name="news" id="2" type="checkbox" />$50 - $100<span className="count">(5)</span></label>
									</li>
									<li>
										<label className="checkbox-inline" for="3"><input name="news" id="3" type="checkbox" />$100 - $250<span className="count">(8)</span></label>
									</li>
								</ul>

							</div>

							<RecentProducts />


						</div>
					</div>
					<div className="col-lg-9 col-md-8 col-12">
						<div className="row">
							<div className="col-12">
								<div className="shop-top">
									<div className="shop-shorter">
										<div className="single-shorter">
											<label>Show :</label>
											<select >
												<option selected="selected">09</option>
												<option>15</option>
												<option>25</option>
												<option>30</option>
											</select><div className="nice-select" tabindex="0"><span className="current">09</span><ul className="list"><li data-value="09" className="option selected">09</li><li data-value="15" className="option">15</li><li data-value="25" className="option">25</li><li data-value="30" className="option">30</li></ul></div>
										</div>
										<div className="single-shorter">
											<label>Sort By :</label>
											<select >
												<option selected="selected">Name</option>
												<option>Price</option>
												<option>Size</option>
											</select><div className="nice-select" tabindex="0"><span className="current">Name</span><ul className="list"><li data-value="Name" className="option selected">Name</li><li data-value="Price" className="option">Price</li><li data-value="Size" className="option">Size</li></ul></div>
										</div>
									</div>
									<ul className="view-mode">
										<li className="active"><a href="shop-grid.html"><i className="fa fa-th-large"></i></a></li>
										<li><a href="shop-list.html"><i className="fa fa-th-list"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="tab-single" >
							<div className="row" >

								<Products />

							</div>
						</div >
					</div>
				</div>
			</div>
		</section>
	)
};

export default ShopGrid;