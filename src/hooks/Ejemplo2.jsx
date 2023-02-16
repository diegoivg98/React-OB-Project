import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    //useEffect(() => {
    //  console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM');
    //console.log(miRef);
    //});

    //*Ejecutar Solo cuando cambie contador 1 
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM');
    //    console.log(miRef);   
    // }, [contador1]);

    //*Ejecutar Solo cuando cambie contador 1 o contador 2 
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 | Contador 2');
        console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM');
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>Ejemplo useState(), useRef() y useEffect()</h1>
            <h2>Contador1: { contador1 }</h2>
            <h2>Contador2: { contador2 }</h2>
            <h4 ref={ miRef }>Ejemplo de elemento referenciado</h4>
            <div>
                <button onClick={ incrementar1 }>Incrementar Contador 1</button>
                <button onClick={ incrementar2 }>Incrementar Contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
