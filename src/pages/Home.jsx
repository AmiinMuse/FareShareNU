import React from "react";

import Hero from "../components/Hero"
import IconSection from "../components/IconSection";
import TeamSection from "../components/TeamSection";

import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Hero/>
            <IconSection/>
            <TeamSection/>
        </div>
    )
}

export default Home