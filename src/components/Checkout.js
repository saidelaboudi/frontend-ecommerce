import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCart } from '../redux/reducer/product-reducer';

import { HOST } from "./Constantes";


const Checkout = () => {
    const cart1 = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    return (
        <>
            <Check cart={cart1} dispatch={dispatch} />
        </>
    )
}

const submitCart = (cart, user) => {

    var a = {
        "amount": 0,
        "id": 0,
        "itemList": [],
        "user": {}
    }

    cart.map((product) => {
        a.itemList.push(
            {
                "id": 0,
                "product": {
                    "bestSelling": product.bestSelling,
                    "category": product.category,
                    "id": product.id,
                    "image": product.image,
                    "name": product.name,
                    "newArrival": product.newArrival,
                    "price": product.price
                },
                "quantity": product.qty
            }
        )
        a.amount += product.qty * product.price;
        return 0 ;
    })

    a.user = user


    axios.post(HOST + '/order/newOrder', a)
    localStorage.clear();
    this.props.dispatch(setCart({}))
}

class Check extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "address": "string",
            "email": "string",
            "firstname": "string",
            "id": 0,
            "lastname": "string",
            "phonenumber": "string",
            "roles": [
                "USER"
            ]
        }
    }

    submit = () => {
        // axios.post('http://localhost:8095/api/users', this.state)
        submitCart(this.props.cart, this.state)
    }

    change = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    render() {
        const cart = this.props.cart
        var total = 0;
        cart.map((element) => {
            total += element.qty * element.price;
            return 0 ;
        });
        return (
            <section className="shop checkout section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="checkout-form">
                                <h2>Faites votre commande ici</h2>
                                <p>Veuillez vous inscrire pour payer plus rapidement</p>

                                <form className="form" onChange={this.change} onSubmit={this.submit}>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Nom<span>*</span></label>
                                                <input type="text" name="firstname" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Prenom<span>*</span></label>
                                                <input type="text" name="lastname" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">s
                                            <div className="form-group">
                                                <label>Email <span>*</span></label>
                                                <input type="email" name="email" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <label>numero de telephone<span>*</span></label>
                                                <input type="number" name="phonenumber" placeholder="" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="form-group">
                                                <label>Adresse <span>*</span></label>
                                                <input type="text" name="address" placeholder="" required="required" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button">
                                        <button type="submit" className="btn">Passer ?? la caisse</button>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="order-details">
                                <div className="single-widget">
                                    <h2>TOTALS</h2>
                                    <div className="content">
                                        <ul>
                                            <li>Total<span>{total} MAD</span></li>
                                            <li>(+) Shipping<span>25.00 MAD</span></li>
                                            <li className="last">Total<span>{total + 25.00} MAD</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="google-btn">
                    <div className="mt-4">
                        <a className="btn google google-icon-wrapper" target="popup"
                            href="'HOST'/login">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" /><b>  Sign in with google</b></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Checkout;