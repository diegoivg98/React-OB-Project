import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location  = useLocation()
    const online = location.state.online
    const search = location.search
    console.log('Query params:',search);

    return (
        <div>
        <h1>State: {online ? 'online':'offline'}</h1>
        </div>
    );
}

export default StatePage;
