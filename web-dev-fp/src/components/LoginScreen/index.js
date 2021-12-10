import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

const LoginScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/login'}/>
            <h1>Login Screen</h1>
            <Footer/>
        </>
    )
};

export default LoginScreen;