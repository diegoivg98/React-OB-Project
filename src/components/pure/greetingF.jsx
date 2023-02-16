import React, { useState } from "react";
import PropTypes from "prop-types";

const Greetingf = (props) => {
  /* A hook that allows you to use state in a functional component. */
  const [age, setage] = useState(29);

  /**
   * The birthday function is a function that takes no parameters and returns nothing. It increments
   * the age variable by one.
   */
  const birthday = () => {
    setage(age + 1);
  };

  return (
    <div>
      <h1>HOLA {props.name} desde componente funcional!</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>Cumplir años</button>
      </div>
    </div>
  );
};

Greetingf.propTypes = {
  /* A validation of the props that are passed to the component. */
  name: PropTypes.string,
};

export default Greetingf;
