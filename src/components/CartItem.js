import React from 'react';


const CartItem = ({ item }) => {

    return (
        <li>
            <a className="cart-img" href={() => false}>
                <img src={`data:image/jpeg;base64,${item.image.data}`} alt="#" />
                </a>
            <h4><a href={() => false}>{item.name}</a></h4>
            <p className="quantity"> Quantite <span className="amount">{item.qty}</span></p>
        </li>
    );
};

export default CartItem;