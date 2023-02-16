import React from 'react';

/* A function that returns a div with a h1 and h2 tag. */
const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo children props</h1>
            {/* Using the props.nombre value to display the name. */}
            <h2>Nombre: { props.nombre }</h2>
            { props.children }
        </div>
    );
}

export default Ejemplo4;
