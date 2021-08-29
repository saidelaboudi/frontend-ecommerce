import React from "react";

import Product from "./Product";

const Products = ({ products }) => {

    return (
        <div className="tab-single" >
            <div className="row" > {products.map((product) =>
                <Product key={product.id} product={product} />
            )}
            </div>
        </div >
    )
};


export default Products;