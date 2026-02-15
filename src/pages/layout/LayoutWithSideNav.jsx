// components/LayoutWithSideNav.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../home/sidenav';
import HomeNavigation from "../home/mobile_nav"
import Footer from './Footer';

const LayoutWithSideNav = () => {
    return (
        <div className="layout">
            {/* Fixed SideNav */}
            {
                window.innerWidth <= 500 ? <HomeNavigation /> : <SideNav />
            }

            {/* Main Content Area */}
            <div className="content">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default LayoutWithSideNav;
