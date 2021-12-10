import React, {useEffect, useState} from "react";
import NavigationComponent from "../NavigationComponent";

const HomeScreen = () => {
    return (
        <>
            <div>
                <NavigationComponent activeLink={'/home'}/>
            </div>


        </>
    )
};

export default HomeScreen;
