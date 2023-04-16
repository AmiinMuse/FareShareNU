import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default DashboardLayout