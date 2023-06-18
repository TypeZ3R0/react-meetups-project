import React, { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
    const favoriteContext = useContext(FavoritesContext);
    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    const toggleFavoriteStatusHandler = () => {
        if (itemIsFavorite) {
            favoriteContext.removeFavorites(props.id);
        } else {
            favoriteContext.addFavorites({
                id: props.id,
                title: props.title,
                image: props.imageSrc,
                address: props.address,
                description: props.desc,
            });
        }
    };

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.imageSrc} alt="meetup-location" />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.desc}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;
