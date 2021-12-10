import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

const SearchScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/search'}/>
            <h1>Search Screen</h1>
            <Footer/>
        </>
    )
};

export default SearchScreen;