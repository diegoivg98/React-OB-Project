import React, { useRef } from "react";

const Child = ({ name, send, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  /**
   * The function pressButton() is a function that alerts the user with the text "Default Text" when
   * the button is pressed.
   */
  function pressButton() {
    const text = messageRef.current.value;
    alert(`Default Text: ${text}`);
  }

  /**
   * This function takes a parameter called text and alerts the user with the text.
   */
  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  /**
   * When the form is submitted, prevent the default action, and then update the state with the value
   * of the input.
   */
  function submitName(e){
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{ background: "cyan", padding: "30px" }}>
      {/* A function that is executed when the mouse is over the paragraph. */}
      <p onMouseOver={() => console.log("Mouse Over")}>Hello, {name}</p>
      <button onClick={() => console.log("Boton 1 pulsado")}>Boton 1</button>
      <button onClick={pressButton}>Boton 2</button>
      <button onClick={() => pressButtonParams("Hello")}>Boton 3</button>

      {/* An input that has a placeholder text, when the input is focused it will log "Input Focused" in
      the console, when the input is changed it will log "Input Changed: " and the value of the
      input in the console, and when the input is copied it will log "Copied text from Input" in the
      console. */}
      <input
        placeholder="send a text to your father"
        onFocus={() => console.log("Input Focused")}
        onChange={(e) => console.log("Input Changed: ", e.target.value)}
        onCopy={() => console.log("Copied text from Input")}
        ref={messageRef}
      />

      {/* Calling the function send() from the parent component and passing the value of the input as a
       parameter. */}
      <button onClick={() => send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{ marginTop: "20x" }}>
        {/* A form that when submitted will call the function submitName() and pass the event as a
        parameter. */}
        <form onSubmit={submitName}>
            <input ref={nameRef} placeholder="New Name"/>
            <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
