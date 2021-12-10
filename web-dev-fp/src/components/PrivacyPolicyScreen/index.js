import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

const PrivacyPolicyScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/privacy'}/>
            <h1>Privacy Policy Screen</h1>
            <Footer/>
        </>
    )
};

export default PrivacyPolicyScreen;