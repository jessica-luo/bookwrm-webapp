import React from "react";
import NavigationComponent from "../NavigationComponent";

const ProfileScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/profile'}/>
            <h1>Profile Screen</h1>
        </>
    )
};

export default ProfileScreen;