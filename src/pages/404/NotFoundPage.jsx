import React from 'react';
import {useNavigate } from "react-router-dom";

export const NotFoundPage = () => {

    const navigate = useNavigate();

    const goHome = () => {
      navigate('/');
    };

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <div>
            <button onClick={goHome}>Go to Home</button>
            </div>
        </div>
    );
}

