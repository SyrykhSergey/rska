import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import HomePage from '../pages/HomePage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

export default AppRoutes;
