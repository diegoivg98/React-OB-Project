import React, { useState } from "react";

const Ejemplo1 = () => {
    //valor inicial para ontador
    const valorInicial = 0;

    //valor inicial para persona
    const personaInicial = {
        nombre: "Diego",
        email: "diego@gmail.com",
    };

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * The function incrementarContador() is a function that takes no arguments and returns nothing. It
     * sets the value of the variable contador to the value of the variable contador plus 1.
     */
    function incrementarContador() {
        setContador(contador + 1);
    }

    /**
     * The function actualizarPersona() sets the state of the component Persona to the object {nombre:
     * "Pepe", email: "pepe@gmail.com"}.
     */
    function actualizarPersona() {
        setPersona({
            nombre: "Pepe",
            email: "pepe@gmail.com",
        });
    }

    return (
        <div>
        <h1>Ejemplo useState()</h1>
        <h2>Contador: { contador }</h2>
        <h2>Datos de la Persona:</h2>
        <h3>Nombre: { persona.nombre }</h3>
        <h4>Email: { persona.email }</h4>
        <button onClick={ incrementarContador }>Incrementar Contador</button>
        <button onClick={ actualizarPersona }>actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
