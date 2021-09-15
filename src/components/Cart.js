import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import axios from "axios";

const HOST =  process.env.HOST ;

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    var total = 0;
    cart && cart.forEach((element) => {
        total += element.qty * element.price;
    });

    const checkout = () => {
        var order = {
            "amount": 1,
            "id": 1,
            "itemList": [
                {
                    "id": 1,
                    "product": {
                        "bestSelling": true,
                        "category": {
                            "description": "string",
                            "id": 1,
                            "name": "string"
                        },
                        "id": 1,
                        "name": "string",
                        "newArrival": true,
                        "price": 1
                    },
                    "quantity": 1
                }
            ]
        }
        cart.forEach((item) => {
            order.itemList.push({
                id: 1235,
                "product": {
                    "bestSelling": item.bestSelling,
                    "category": item.category,
                    "id": item.id,
                    "name": item.name,
                    "newArrival": item.newArrival,
                    "price": item.price
                },
                "quantity": item.qty
            })
        });
        order.amount = total;
        order.id = 3632;
        axios.post(HOST + '/api/order/newOrder', order).then((response) => console.log(response.data));
    }

    return (
        <div className="col-lg-2 col-md-3 col-12">
            <div className="right-bar">
                <div className="sinlge-bar shopping">
                    <a href="/#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">{cart.length}</span></a>
                    <div className="shopping-item">
                        <div className="dropdown-cart-header">
                            <span>{cart.length} Items</span>
                            <a href="/#">View Cart</a>
                        </div>

                        <ul className="shopping-list">

                            {cart.forEach((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}

                        </ul>
                        <div className="bottom">
                            <div className="total">
                                <span>Total</span>
                                <span className="total-amount">{total} MAD</span>
                            </div>
                            <a href="cart" onClick={() => checkout()} className="btn animate">CART</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;





