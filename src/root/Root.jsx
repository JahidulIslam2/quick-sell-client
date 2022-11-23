import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/nav/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;