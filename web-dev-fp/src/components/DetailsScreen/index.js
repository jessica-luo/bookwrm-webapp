import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

const DetailsScreen = () => {

    return (
        <>
            <NavigationComponent activeLink={'/details'}/>
            <h1>Details Screen</h1>
            <Footer/>
        </>
    )
};

export default DetailsScreen;