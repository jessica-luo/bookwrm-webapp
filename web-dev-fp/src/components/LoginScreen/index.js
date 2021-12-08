import React from "react";
import NavigationComponent from "../NavigationComponent";

const LoginScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/login'}/>
            <h1>Login Screen</h1>
        </>
    )
};

export default LoginScreen;