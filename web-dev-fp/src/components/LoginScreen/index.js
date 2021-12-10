import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {loginUser as login}  from "../../services/userService";
import {Link, useHistory} from "react-router-dom";
import authorService, {loginAuthor} from "../../services/authorService";
import axios from 'axios';
import {useState} from "react";
import userService from "../../services/userService";

const LoginScreen = ({setLoginUser}) => {

    const [user, setUser] = useState({username: '', password: ''})

    const loginUser = (user) =>
        userService.loginUser(user)
             .then(state => {setLoginUser(state.user)})

    const loginAuthor = (user) =>
        authorService.loginAuthor(user)
            .then(state => setLoginUser(state.user))

        return (
            <>
                <NavigationComponent activeLink={'/login'}/>

                <div className={"container main-container bg-none"}>
                    <h1 className={"mt-5"}>Login</h1>
                    <input value={user.username}
                        onChange={(e) => setUser({
                               ...user, username: e.target.value, password: user.password
                           })}
                           placeholder={"username"} className={`form-control mt-1`}/>
                    <input
                        value={user.password}
                        onChange={(e) => setUser({
                            ...user, password: e.target.value, username: user.username
                        })}
                        placeholder={"password"} type={"password"} className={`form-control mt-1`}/>
                    <button
                        onClick={() => loginUser(user)}
                        className={`btn btn-success mt-1`}>Login as Reader</button>
                    <button
                        onClick={() => loginAuthor(user)}
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
};

export default LoginScreen;