import React from "react";
import CartItem from "./CartItem";

export var cart = [];

const Cart = () => {

    return (
        <div className="col-lg-2 col-md-3 col-12">
            <div className="right-bar">
                <div className="sinlge-bar shopping">
                    <a href="www.google.com" className="single-icon"><i className="ti-bag"></i> <span className="total-count">{cart.length}</span></a>
                    <div className="shopping-item">
                        <div className="dropdown-cart-header">
                            <span>2 Items</span>
                            <a href="www.google.com">View Cart</a>
                        </div>

                        <ul className="shopping-list">

                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
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
    )

};

export default Cart;





