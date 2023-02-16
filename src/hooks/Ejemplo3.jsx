import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

/**
 * Componente1 is a function that returns a div with an h1 and a Componente2.
 * @returns A function that returns a div with a h1 and a Componente2.
 */
const Componente1 = () => {
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El Token es: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}

/**
 * The function Componente2 is a React component that returns a div containing an h1 element that
 * displays the value of the sesion property of the state object.
 * @returns The value of the state.sesion variable.
 */
const Componente2 = () => {
    const state = useContext(miContexto);

    return (
        <div>
            <h1>La sesion es: {state.sesion}</h1>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '1212',
        sesion: 1
    }

    const [sessionData, setsessionData] = useState(estadoInicial);

   /**
    * When the user clicks the button, the function will update the sessionData object with a new token
    * and increment the sesion value by 1.
    */
    function actualizarSesion() {
        setsessionData({
            token: '123456',
            sesion: sessionData.sesion + 1
        })
    }

    return (
/* Providing the sessionData object to the miContexto context. */
        <miContexto.Provider value={ sessionData }>
        <h1>Ejemplo useState() y useContext()</h1>
            <Componente1></Componente1>
            <button onClick={ actualizarSesion }>actualizar Sesion</button>
        </miContexto.Provider>
    )
}
