import React from "react";

import './About.css'

const About = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"> About Us</h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    A background information about the project and the team <br/>
                    Can simply copy and paste from the WildHacks About when done!
                </p>
            </div>
        </div>
    )
}

export default About