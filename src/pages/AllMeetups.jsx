import React from "react";
import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const AllMeetUpsPage = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const getMeetups = async () => {
            const response = await fetch(
                process.env.MEETUPS_LIST
            );
            const data = await response.json();
            let meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        };
        getMeetups()
    }, []);

    if (isLoading) {
        return (
            <section>
                <h3>Loading...</h3>
            </section>
        );
    }

    return (
        <section>
            <h1>All meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );

};

export default AllMeetUpsPage;
