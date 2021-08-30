import React from 'react';


const CartItem = ({ item }) => {

    return (
        <li>
            <a href="www.google.com" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
            <a className="cart-img" href="www.google.com"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
            <h4><a href="www.google.com">{item.name}</a></h4>
            <p className="quantity"> quantity <span className="amount">{item.qty}</span></p>
        </li>
    );
};

export default CartItem;