import React from "react";
import NavigationComponent from "../NavigationComponent";

const HomeScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/home'}/>
            <div className={"container main-container bg-none"}>

            </div>

        </>
    )
};

export default HomeScreen;