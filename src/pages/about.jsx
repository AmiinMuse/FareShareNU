import React from "react";

import './About.css'

const About = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"> About The Project</h2>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                    A background information about the project<br/>
                    
                </p>
            </div>

            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white">Description</h3>

                <p class="text-lg text-gray-800 dark:text-gray-200">This will be the official
                 website that connects students who want to share rides to and from the airports in the Chicago area: O'Hare and Midway. 
                 It will require each student to register with their Northwestern email and undergo verification to create an account. 
                 The goal of the website is to collect the destinations and times when students want to leave/arrive, 
                and based on that information, they will be connected with 1-2 other people.</p>
            </div>

            <br/><br/>
            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white">Inspiration</h3>

                <p class="text-lg text-gray-800 dark:text-gray-200">Often, Northwestern students struggle to find cheap Uber rides 
                to and from the airport and end up paying high prices. Even more frustrating, people send messages to group chats hoping to 
                find someone to share the fare with; they're lucky even if they receive one response. Our group thought, what if we could make 
                a platform to connect those students and make it easier, more convenient, and safe for them to find a group to share the fare 
                with? </p>
            </div>

            <br/><br/>
            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white">What it does</h3>

                <p class="text-lg text-gray-800 dark:text-gray-200"> Our website connects students, by first having them login into 
                it using the Northwestern email. Then students can search (filter by) their departure time, and the type of Uber/Lyft 
                they want, and the group with those descriptions will pop up. From there, they can join and get each other's contacts. 
                If no group is available or the group you want has reached its limit, then you create your own group and let other people 
                join you.  </p>
            </div>


            <br/><br/>
            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white">How we built it</h3>

                <p class="text-lg text-gray-800 dark:text-gray-200">We used Javascript, React, CSS, HTML, Bootstrap, and Supabase.  </p>
            </div>

            <br/><br/>
            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white"> Challendges we ran into</h3>

                <p class="text-lg text-gray-800 dark:text-gray-200">Trying to learn how to connect our React pages to the database. Also, find the most optimal way to group people.  </p>
            </div>


            <br/><br/>
            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white"> Accomplishments that we're proud of </h3>

                <p class="text-lg text-gray-800 dark:text-gray-200">Staying focused for hours to debug our pages, sitting together, and bonding together for a long time.  </p>
            </div>

            <br/><br/>
            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white"> What we learned </h3>

                <p class="text-lg text-gray-800 dark:text-gray-200">  We learned a lot about React, prioritizing what software/technologies to use. How to cooperate on a big 
                project and finish it in a limited time. </p>
            </div>

            <br/><br/>
            <div class="space-y-3">
                <h3 class="text-2xl font-semibold dark:text-white"> What's next </h3>

                <p class="text-lg text-gray-800 dark:text-gray-200"> We're planning to improve how we group people together. 
                Get more users and find ways to make money from it, while keeping it free for students. Change the website to an app 
                that is more accessible to more students. On top of that, we are planning to make a communication platform or online chat
                 that doesn't require a person to share their personal contact info. </p>
            </div>



          
        </div>
        





    )
}

export default About