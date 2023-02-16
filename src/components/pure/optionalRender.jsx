import React, { useState } from "react";

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: "white",
    fontWeight: "bold",
};

const unloggedStyle = {
    backgroundColor: "tomato",
    color: "white",
    fontWeight: "bold",
};
//Login logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>
            Login
        </button>
    );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>
            Logout
        </button>
    );
};

const OptionalRender = () => {
    const [access, setAccess] = useState(false);

    const [Nmessages, setNMessages] = useState(0);

    /**
     * When the user clicks the button, the access state is set to the opposite of what it was before.
     */
    //const updateAccess = () => {
    //    setAccess(!access);
    //}

    const loginAction = () => {
        setAccess(true);
    };
    const logoutAction = () => {
        setAccess(false);
    };

    let Optionalbutton;

    //if (access) {
    //    Optionalbutton = <button onClick={updateAccess}>Logout</button>
    //}else{
    //    Optionalbutton = <button onClick={updateAccess}>Login</button>
    //}

    if (access) {
        Optionalbutton = (
            <LogoutButton
                propStyle={unloggedStyle}
                logoutAction={logoutAction}
            ></LogoutButton>
        );
    } else {
        Optionalbutton = (
            <LoginButton
                propStyle={loggedStyle}
                loginAction={loginAction}
            ></LoginButton>
        );
    }

    let addMessages = () => {
        setNMessages(Nmessages + 1);
    };

    return (
        <div>
            {Optionalbutton}
            {/* Nmessages > 0 && Nmessages === 1 && <p>You have {Nmessages} new message...</p>*/}
            {/*Nmessages > 1 && <p>You have {Nmessages} new messages...</p>*/}
            {/*Nmessages === 0 && <p>There are no new messages...</p>*/}
            {access ? (
                <div>
                    {Nmessages > 0 ? (
                        <p>
                            You have {Nmessages} new message{Nmessages > 1 ? "s" : null}...
                        </p>
                    ) : (
                        <p>There are no new messages...</p>
                    )}
                    <button onClick={addMessages}>
                        {Nmessages === 0 ? "Add your first message" : "Add new message"}
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default OptionalRender;
