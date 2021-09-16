import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/action/product-actions"


const Products = () => {

    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const AddToCart = async (prod) => {
        dispatch(addToCart(prod))
    };

    const renderList = products && Object.values(products).map((product) => {
        const { bestSelling, category, id, image, name, newArivval, price } = product;
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={id}>

                <div className="single-product" >
                    <div className="product-img" >
                        <a href={() => false} >
                            <img className="default-img" src={`data:image/jpeg;base64,${image.data}`} alt="#" />
                            <img className="hover-img" src={`data:image/jpeg;base64,${image.data}`} alt="#" />
                        </a> <div className="button-head" ><div className="product-action" >
                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href={() => false}>
                                <i className=" ti-eye" >
                                </i>
                                <span>Quick Shop</span >
                            </a>
                            <a title="Wishlist" href={() => false}>
                                <i className=" ti-heart " > </i>
                                <span>Add to Wishlist</span >
                            </a>
                            <a title="Compare" href={() => false}>
                                <i className="ti-bar-chart-alt" > </i>
                                <span>Add to Compare</span >
                            </a> </div >
                            <div className="product-action-2" >

                                <a title="Add to cart" href={() => false} onClick={() => AddToCart({ id, name, category, price, image, newArivval, bestSelling })}> Add to cart </a>

                            </div >
                        </div>
                    </div >
                    <div className="product-content" >
                        <div className="product-price" >
                            <h3 >
                                <a href={() => false} >{name} </a>
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