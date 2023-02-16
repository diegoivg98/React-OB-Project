import React from 'react';
import { useNavigate } from "react-router-dom";

export const ProfilePage = ({logged}) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); 
    };

    const goTasks = () => {
        navigate('/tasks'); 
    };

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={goTasks}>Tasks</button>
            <div>
            <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}

