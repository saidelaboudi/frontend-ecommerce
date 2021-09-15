import React from 'react';
import { useSelector } from 'react-redux';

const RecentProducts = () => {
    const products = useSelector((state) => state.products.products);

    const renderList = products && Object.values(products).map((product) => {
        const { id, name, newArrival, price } = product;
        if (newArrival)
            return (
                <div className="single-post first" key={id}>
                    <div className="image">
                        <img src="https://via.placeholder.com/75x75" alt="#" />
                    </div>
                    <div className="content">
                        <h5><a href="/#">{name}</a></h5>
                        <p className="price">{price} MAD</p>
                        <ul className="reviews">
                            <li className="yellow"><i className="ti-star"></i></li>
                            <li className="yellow"><i className="ti-star"></i></li>
                            <li className="yellow"><i className="ti-star"></i></li>
                            <li><i className="ti-star"></i></li>
                            <li><i className="ti-star"></i></li>
                        </ul>
                    </div>
                </div>
            );
    });

    return (
        <div className="single-widget recent-post">
            <h3 className="title">Recent post</h3>
            {renderList}
        </div>
    )

};

export default RecentProducts;