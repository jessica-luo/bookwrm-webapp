import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

export default class ProfileScreen extends React.Component {

    state = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        author: false
    }

    edit = (user) =>
        console.log(user)

    render() {
        return (
            <>
                <NavigationComponent activeLink={'/login'}/>
                <h1>Profile page</h1>

                <div className={"container main-container bg-none"}>

                </div>
                <Footer/>
            </>
        )
    }
};

