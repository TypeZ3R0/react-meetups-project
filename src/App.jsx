import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout.jsx";
import AllMeetUpsPage from "./pages/AllMeetups.jsx";
import FavoritesPage from "./pages/Favorites.jsx";
import NewMeetupsPage from "./pages/NewMeetups.jsx";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllMeetUpsPage />} />
                <Route path="/new-meetups" element={<NewMeetupsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Layout>
    );
};

export default App;
