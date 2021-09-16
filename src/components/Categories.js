import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setCategories } from "../redux/action/product-actions"
import Section from './Sections';
import PersistedStore from '../PersistedStore';
import TrendingProducts from './TrendingProducts';

import { HOST } from "./Constantes";


const Categories = () => {
    PersistedStore.loadState()
    const categories = useSelector((state) => state.categories.categories);
    const dispatch = useDispatch();


    const init = async () => {
        axios.get(HOST + '/api/category').then((response) => {
            dispatch(setCategories(response.data))
        });
        chargeProduct({ id: 1 })
        var current = document.getElementsByClassName("active");
        current[0].className += " active";
    };

    const chargeProduct = async (category) => {
        axios.get(HOST + '/api/products/category/' + category.id).then((response) => {
            dispatch(setProducts(response.data));
        });

        var a = document.getElementsByClassName("nav-link")
        var active = document.getElementsByClassName("nav-link active")
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener("click", function () {
                for (var i = 0; i < active.length; i++) {
                    active[i].className = "nav-link";
                }
                this.className += " active";
            });
        }
    };


    useEffect(() =>init(),[]);


    const AllCategories = categories && Object.values(categories).map((category) => {
        const { id, name, description } = category;
        return (
            <li className="nav-item" key={id} >
                <a className="nav-link" id={"Categorie" + id} data-toggle="tab" href={() => false} role="tab" onClick={() => { chargeProduct({ id, name, description }) }} >
                    {name}
                </a>
            </li>
        )
    }
    );

    return (
        <>
            <Section />
            <div className="product-area section" >
                <div className="container" >
                    <div className="row" >
                        <div className="col-12" >
                            <div className="section-title" >
                                <h2 > Trending Item </h2>
                            </div>
                        </div>
                    </div >
                    <div className="row" >
                        <div className="col-12" >
                            <div className="product-info" > </div>
                            <div className="nav-main" >
                                <ul className="nav nav-tabs" id="myTab" role="tablist" >
                                    {AllCategories}
                                </ul>
                            </div>

                            <div className="tab-content"
                                id="myTabContent" >
                                <div className="tab-pane fade show active"
                                    id="man"
                                    role="tabpanel" >
                                    <div className="tab-single" >
                                        <div className="row" >
                                            <TrendingProducts />
                                        </div>
                                    </div >
                                </div>
                            </div >
                        </div>
                    </div >
                </div >
            </div >
        </>
    );
}

export default Categories;