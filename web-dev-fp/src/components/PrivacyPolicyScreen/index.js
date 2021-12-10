import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

const PrivacyPolicyScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/privacy'}/>
            <div className={'page-content'}>

            </div>
            <Footer/>
        </>
    )
};

export default PrivacyPolicyScreen;