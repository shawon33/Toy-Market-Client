import React from 'react';
import Navbar from '../Page/SharePage/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/SharePage/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;