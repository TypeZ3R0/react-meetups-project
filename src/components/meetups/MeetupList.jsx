import React from "react";

import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
    return (
        <ul className={classes.list}>
            {props.meetups.map((meetup) => {
                return (
                    <MeetupItem
                        key={meetup.id}
                        id={meetup.id}
                        title={meetup.title}
                        imageSrc={meetup.image}
                        address={meetup.address}
                        desc={meetup.description}
                    />
                );
            })}
        </ul>
    );
};

export default MeetupList;
