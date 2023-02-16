import React from 'react';
import {useNavigate} from "react-router-dom";

export const HomePage = () => {

    const navigate = useNavigate();  

    const navigateProps = () => {
       /* Passing state and query params to the next page. */
        navigate(
            { 
              pathname: "/online-state",
              search: '?online=true',
            },
            { state: { online: true } },
          );
    }

    const goProfile = () => {
        navigate('/profile');
    };

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={navigateProps}>Go to page with state/query params</button>
                <button onClick={goProfile}>Go to Profile</button>
            </div>
        </div>
    );
}

