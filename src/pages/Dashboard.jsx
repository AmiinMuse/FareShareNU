import React from "react";
import { Outlet } from "react-router-dom";

import './Dashboard.css'

const Dashboard = ({session}) => {
    return (
        <Outlet/>
    )
}

export default Dashboard