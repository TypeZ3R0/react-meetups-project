import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupsPage = () => {
    
    const navigate = useNavigate();

    const handleAddMeetup = async (meetupData) => {
        try {
            await fetch(
                "https://react-meetups-tutorial-a9f66-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
                {
                    method: "POST",
                    body: JSON.stringify(meetupData),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );
            navigate("/", { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={handleAddMeetup} />
        </div>
    );

};

export default NewMeetupsPage;

// navigate("/", { replace: true });
