import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AboutPage = () => {

  /* A hook that returns the current location. */
  const location = useLocation();
  
 /* Logging the current pathname to the console. */
  console.log("we are using location: ", location.pathname);

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goBack = () => {
    navigate(-1); // v5's history.go(-1) or history.goBack()
  };

  const goForward = () => {
    navigate(1); // v5's history.go(1) or history.goForward()
  };
  return (
    <div>
      <h1>About|FAQs</h1>
      <div>
        <button onClick={goHome}>Go to Home</button>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goForward}>Go Forward</button>
      </div>
    </div>
  );
};
