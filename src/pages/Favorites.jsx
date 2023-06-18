import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";

import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <section>
            <h1>My favorites</h1>
            {
                (favoritesContext.totalFavorites === 0 ? (
                    <p>You have no favorites</p>
                ) : (
                    <MeetupList meetups={favoritesContext.favorites} />
                ))
            }
        </section>
    );
};

export default FavoritesPage;
