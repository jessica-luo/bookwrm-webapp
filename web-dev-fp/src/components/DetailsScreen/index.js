import React from "react";
import NavigationComponent from "../NavigationComponent";

const DetailsScreen = () => {

    return (
        <>
            <NavigationComponent activeLink={'/details'}/>
            <h1>Details Screen</h1>
        </>
    )
};

export default DetailsScreen;