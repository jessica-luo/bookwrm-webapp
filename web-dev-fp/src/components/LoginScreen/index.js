import React from "react";
import NavigationComponent from "../NavigationComponent";
import {createUser} from "../../services/userService";
import {createAuthor} from "../../services/authorService";

export default class LoginScreen extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    }

    registerUser = (user) =>
        createUser(user)
            .then(user => this.props.history.push('/profile'))

    registerAuthor = (user) =>
        createAuthor(user)
            .then(user => this.props.history.push('profile'))

    render() {
        return (
            <>
                <NavigationComponent activeLink={'/login'}/>
                <h1>Login Page</h1>

                <div className={"container main-container bg-none"}>
                    <h1 className={"mt-5"}>Login</h1>
                    <input placeholder={"username"} className={`form-control mt-1`}/>
                    <input placeholder={"password"} type={"password"} className={`form-control mt-1`}/>
                    <button className={`btn btn-success mt-1`}>Login
                    </button>

                    <h1 className={"mt-5"}>Register</h1>
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
                    <button onClick={() => this.registerUser(this.state)}
                            className={`btn btn-success`}>Register as a Reader
                    </button>

                    <button onClick={() => this.registerAuthor(this.state)}
                            className={`btn btn-primary`}>Register as an Author
                    </button>

                    <p className={"mb-5"}>*Author accounts have different permissions from readers.</p>
                </div>
            </>
        )
    }
};