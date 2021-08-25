import axios from 'axios';
import React from 'react'

// const allCategories = axios.get('http://localhost:8081/api/category').then(response => console.log(response.data));

class Categories extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            products: []
        };
    }
    Allcategories = axios.get('http://localhost:8081/api/category').then(response => {
        console.log(response.data)
        this.setState({ categories: response.data })
    });
    AllProduct = axios.get('http://localhost:8081/api/product').then(response => {
        console.log(response.data)
        this.setState({ products: response.data })
    });
    render() {
        return (
            <div class="product-area section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title">
                                <h2>Trending Item</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="product-info"></div>
                            <div className="nav-main">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    {this.state.categories.map((categorie) => (
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">{categorie.name}</a></li>
                                    ))
                                    }
                                </ul>
                            </div>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="man" role="tabpanel">
                                    <div class="tab-single">
                                        <div class="row">
                                            {this.state.products.map((product) => <>
                                                <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                                                    <div className="single-product">
                                                        <div className="product-img">
                                                            <a href="product-details.html">
                                                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                                            </a>
                                                            <div className="button-head">
                                                                <div className="product-action">
                                                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="www.google.com"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                                                    <a title="Wishlist" href="www.google.com"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                                                    <a title="Compare" href="www.google.com"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                                                </div>
                                                                <div className="product-action-2">
                                                                    <a title="Add to cart" href="www.google.com">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="product-content">
                                                            <div className="product-price">
                                                                <h3><a href="product-details.html">{product.name}</a></h3>
                                                                <span>${product.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;