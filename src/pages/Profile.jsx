import React from "react";

import './Profile.css'

const Profile = () => {
    return (
            <div>
                <div class="profile">
                    <h1 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Profile</h1>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Picture"/>
                    <h1>John Doe</h1>
                    <h2>Web Developer</h2>
                    <ul>
                        <li><strong>Email:</strong> john.doe@email.com</li>
                        <li><strong>Phone:</strong> 123-456-7890</li>
                        <li><strong>Website:</strong> www.johndoe.com</li>
                    </ul>
                </div>
            </div>
    )
}

export default Profile