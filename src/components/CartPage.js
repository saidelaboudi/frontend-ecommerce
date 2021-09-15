import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cart = useSelector((state) => state.cart.cart)
    var total = 0;
    cart && cart.map((element) => {
        total += element.qty * element.price;
    });
    return (
        <div class="shopping-cart section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <table class="table shopping-summery">

                            <thead>
                                <tr class="main-hading">
                                    <th>PRODUCT</th>
                                    <th>NAME</th>
                                    <th class="text-center">UNIT PRICE</th>
                                    <th class="text-center">QUANTITY</th>
                                    <th class="text-center">TOTAL</th>
                                    <th class="text-center"><i class="ti-trash remove-icon"></i></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    Object.values(cart).map((item) => (
                                        <tr key={item.id}>

                                            <td class="image" data-title="No"><img src="https://via.placeholder.com/100x100" alt="#" /></td>

                                            <td class="product-des" data-title="Description">
                                                <p class="product-name"><a href="#">{item.name}</a></p>
                                                <p class="product-des">{item.description}</p>
                                            </td>

                                            <td class="price" data-title="Price"><span>{item.price} MAD</span></td>

                                            <td class="qty" data-title="Qty">
                                                <div class="input-group">
                                                    <div class="button minus">
                                                        <button type="button" class="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                            <i class="ti-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" name="quant[1]" class="input-number" data-min="1" data-max="100" value={item.qty} />
                                                    <div class="button plus">
                                                        <button type="button" class="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                            <i class="ti-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                            </td>

                                            <td class="total-amount" data-title="Total"><span>{item.price * item.qty} MAD</span></td>
                                            <td class="action" data-title="Remove"><a href="#"><i class="ti-trash remove-icon"></i></a></td>
                                        </tr>

                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="total-amount">
                            <div class="row">
                                <div class="col-lg-4 col-md-7 col-12">
                                    <div class="right">
                                        <ul>
                                            <li>Cart Subtotal<span>{total} MAD</span></li>
                                            <li>Shipping<span>Free</span></li>
                                            <li class="last">You Pay<span>{total} MAD</span></li>
                                        </ul>
                                        <div class="button6">
                                            <a href="checkout" class="btn">Checkout</a>
                                            <a href="shop-grid" class="btn">Continue shopping</a>
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