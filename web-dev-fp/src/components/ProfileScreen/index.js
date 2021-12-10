import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

export default class ProfileScreen extends React.Component {

    state = {
        profile: {
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: ''
        }
    }

    edit = (user) =>
        console.log(user)

    render() {
        return (
            <>
                <NavigationComponent activeLink={'/login'}/>
                <h1>Profile page</h1>

                <div className={"container main-container bg-none"}>

                    <h1 className={"mt-5"}>Update Profile</h1>
                    <input value={this.state.username}
                           onChange={(e) => this.setState({
                               username: e.target.value
                           })}
                           placeholder={"username"} className={`form-control mt-1`}/>
                    <input value={this.state.password}
                           onChange={(e) => this.setState({
                               password: e.target.value
                           })}
                           placeholder={"password"} type={"password"} className={`form-control mt-1`}/>
                    <input value={this.state.email}
                           onChange={(e) => this.setState({
                               email: e.target.value
                           })}
                           placeholder={"email"} className={`form-control mt-1`}/>
                    <input value={this.state.firstName}
                           onChange={(e) => this.setState({
                               firstName: e.target.value
                           })}
                           placeholder={"first name"} className={`form-control mt-1`}/>
                    <input value={this.state.lastName}
                           onChange={(e) => this.setState({
                               lastName: e.target.value
                           })}
                           placeholder={"last name"} className={`form-control mt-1`}/>
                    <button onClick={() => this.edit(this.state)}
                            className={`btn btn-success`}>Update Profile
                    </button>

                </div>
                <Footer/>
            </>
        )
    }
};

