import React from "react";
import { Outlet } from "react-router-dom";

import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <DashboardHeader/>
            <Outlet/>
        </div>
    )
}

export default DashboardLayout