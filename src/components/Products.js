import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action/product-actions"


const Products = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    // console.log(cart)
    const products = useSelector((state) => state.products);
    // console.log(products)
    const AddToCart = async (prod) => {
        dispatch(addToCart(prod))
    };

    const renderList = products && Object.values(products).map((product) => {
        const { bestSelling, category, id, image, name, newArivval, price } = product;
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={id}>

                <div className="single-product" >
                    <div className="product-img" >
                        <a href="product-details.html" >
                            <img className="default-img"  src={`data:image/jpeg;base64,${product.image.data}`} alt="#" />
                            <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                        </a> <div className="button-head" ><div className="product-action" >
                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="">
                                <i className=" ti-eye" >
                                </i>
                                <span>Quick Shop</span >
                            </a>
                            <a title="Wishlist" href="">
                                <i className=" ti-heart " > </i>
                                <span>Add to Wishlist</span >
                            </a>
                            <a title="Compare" href="">
                                <i className="ti-bar-chart-alt" > </i>
                                <span>Add to Compare</span >
                            </a> </div >
                            <div className="product-action-2" >

                                <a title="Add to cart" onClick={() => AddToCart({ id, name, category, price, newArivval, bestSelling })}> Add to cart </a>

                            </div >
                        </div>
                    </div >
                    <div className="product-content" >
                        <div className="product-price" >
                            <h3 >
                                <a href="product-details.html" >{name} </a>
                            </h3 >
                            <span > {price} MAD </span>
                        </div >
                    </div>
                </div >
            </div>
        );
    }
    )


    return <>{renderList}</>
};

export default Products;