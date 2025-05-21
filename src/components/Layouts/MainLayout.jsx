import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;