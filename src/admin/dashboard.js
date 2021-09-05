import React from 'react';
import Category from './Category';
import Header from './Header';
import Product from './Product';
import RecentOrders from './RecentOrders';
import Statistics from './statistics';

const Dashboard = () => {
    return (
        <>
            <Product />
            {/* 
            <Statistics />
            <Header />
            <RecentOrders />
            <Category />
             */}
        </>
    );
};

export default Dashboard;