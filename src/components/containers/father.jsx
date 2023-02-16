import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Diego');

    /**
     * The function showMessage takes a single argument, text, and displays an alert box with the
     * message 'Message received: ' followed by the value of the text argument.
     */
    function showMessage(text){
        alert(`Message received: ${text} `)
    }

    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background:'tomato', padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
