import React from "react";
import NavigationComponent from "../NavigationComponent";

const SearchScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/search'}/>
            <h1>Search Screen</h1>
        </>
    )
};

export default SearchScreen;