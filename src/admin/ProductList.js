import axios from 'axios';
import React from 'react';

var products = [];
axios.get('http://localhost:8095/api/products/all').then(response => { { products = response.data } });

const ProductList = () => {
    const renderList = products && products.map((product) => {
        return (
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered first">
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Categorie</th>
                                <th>Prix</th>
                                <th>new arrivale</th>
                                <th>best salling</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.category.name}</td>
                                <td>{product.price}</td>
                                <td>{product.newArrival}</td>
                                <td>{product.bestSelling}</td>
                                <td>{product.image}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    );

    return (
        <>
            {renderList}
        </>
    );
};

export default ProductList;