import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cart = useSelector((state) => state.cart.cart)
    var total = 0;
    cart && cart.map((element) => {
        total += element.qty * element.price;
        return total;
    });
    return (
        <div className="shopping-cart section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table shopping-summery">

                            <thead>
                                <tr className="main-hading">
                                    <th>PRODUCT</th>
                                    <th>NAME</th>
                                    <th className="text-center">UNIT PRICE</th>
                                    <th className="text-center">QUANTITY</th>
                                    <th className="text-center">TOTAL</th>
                                    <th className="text-center"><i className="ti-trash remove-icon"></i></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    Object.values(cart).map((item) => {
                                        (
                                            <tr key={item.id}>

                                                <td className="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>

                                                <td className="product-des" data-title="Description">
                                                    <p className="product-name"><a href="/#">{item.name}</a></p>
                                                    <p className="product-des">{item.description}</p>
                                                </td>

                                                <td className="price" data-title="Price"><span>{item.price} MAD</span></td>

                                                <td className="qty" data-title="Qty">
                                                    <div className="input-group">
                                                        <div className="button minus">
                                                            <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                                <i className="ti-minus"></i>
                                                            </button>
                                                        </div>
                                                        <input type="text" name="quant[1]" className="input-number" data-min="1" data-max="100" value={item.qty} />
                                                        <div className="button plus">
                                                            <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                                <i className="ti-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </td>

                                                <td className="total-amount" data-title="Total"><span>{item.price * item.qty} MAD</span></td>
                                                <td className="action" data-title="Remove"><a href="/#"><i className="ti-trash remove-icon"></i></a></td>
                                            </tr>

                                        )
                                        return 0;
                                    }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="total-amount">
                            <div className="row">
                                <div className="col-lg-4 col-md-7 col-12">
                                    <div className="right">
                                        <ul>
                                            <li>Cart Subtotal<span>{total} MAD</span></li>
                                            <li>Shipping<span>Free</span></li>
                                            <li className="last">You Pay<span>{total} MAD</span></li>
                                        </ul>
                                        <div className="button6">
                                            <a href="checkout" className="btn">Checkout</a>
                                            <a href="shop-grid" className="btn">Continue shopping</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartPage;