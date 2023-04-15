import React from "react";

import './Help.css'

const Help = () => {
    return (
    <div>
        <div>
            <title>Help Center</title>
        </div>
        <div>
            <h1>Help Page</h1>
            <p>Welcome to our help page! Here, you can find answers to commonly asked questions and solutions to common problems. 
                If you can't find what you're looking for, please don't hesitate to contact us.</p>
            <h2>Frequently Asked Questions</h2>
            <ul>
                <li>How do I create an account?</li>
                <li>What should I do if I forget my password?</li>
                <li>How do I update my personal information?</li>
                <li>What payment methods do you accept?</li>
                <li>How can I track my order?</li>
            </ul>
            <h2>Contact Us</h2>
            <p>If you have any questions or concerns, please contact us:</p>
            <ul>
                <li>Phone: 1-800-123-4567</li>
                <li>Email: support@yourwebsite.com</li>
                <li>Live chat: Click the "Chat Now" button in the bottom right corner</li>
            </ul>
        </div>
    </div>
    )
}

export default Help