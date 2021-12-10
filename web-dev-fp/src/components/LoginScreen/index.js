import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {loginUser} from "../../services/userService";
import {Link, useHistory} from "react-router-dom";
import {loginAuthor} from "../../services/authorService";
import axios from 'axios';


export default class LoginScreen extends React.Component {

    state = {
        username: '',
        password: ''
    }

    loginUser = (state) =>
        //console.log(state)
        loginUser(state)
             .then(state => this.props.history.push("/"))

    loginAuthor = (state) =>
        loginAuthor(state)
            .then(state => this.props.history.push("/"))

    render() {
        return (
            <>
                <NavigationComponent activeLink={'/login'}/>

                <div className={"container main-container bg-none"}>
                    <h1 className={"mt-5"}>Login</h1>
                    <input value={this.state.username}
                        onChange={(e) => this.setState({
                               username: e.target.value
                           })}
                           placeholder={"username"} className={`form-control mt-1`}/>
                    <input
                        value={this.state.password}
                        onChange={(e) => this.setState({
                            password: e.target.value
                        })}
                        placeholder={"password"} type={"password"} className={`form-control mt-1`}/>
                    <button
                        onClick={() => this.loginUser(this.state)}
                        className={`btn btn-success mt-1`}>Login as Reader</button>
                    <button
                        onClick={() => this.loginAuthor(this.state)}
                        className={`btn btn-primary mt-1`}>Login as Author</button>

                    <br/>

                    <h2 className={"mt-5"}>New User?</h2>
                    <Link to="/register">
                        <button className={`btn btn-secondary mt-1`}>Register</button>
                    </Link>
                </div>
                <Footer/>
            </>
        )
    }
};