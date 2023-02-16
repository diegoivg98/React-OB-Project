import React, { useState } from 'react';

//usuario loggeado
/* Defining a constant variable called loggedStyle and assigning it a value of an object with a
property of color and a value of white. */
const loggedStyle = {
    color: 'white'
};

//usuario no loggeado
/* Defining a constant variable called unloggedStyle and assigning it a value of an object with a
property of color and a value of tomato and a property of fontWeight and a value of bold. */
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false)

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? (<p>Hola, {props.name}</p>) : (<p>Please Login</p>)}
            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
