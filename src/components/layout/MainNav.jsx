import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

import classes from "./MainNav.module.css";

const MainNav = () => {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/new-meetups"}>New Meetups</Link>
                    </li>
                    <li>
                        <Link to={"/favorites"}>Favorites</Link>{" "}
                        <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNav;
