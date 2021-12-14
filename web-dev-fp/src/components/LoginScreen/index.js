import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {Link, useHistory} from "react-router-dom";
import authorService from "../../services/authorService";
import {useState} from "react";
import userService from "../../services/userService";
import {useCookies} from "react-cookie";

const LoginScreen = () => {
    const history = useHistory();
    const [user, setUser] = useState({username: '', password: ''})
    const [cookies, setCookie] = useCookies();

    function handleCookie(type) {
        setCookie("user", user.username, {
            path: "/"
        });
        setCookie("loggedIn", true, {
            path: "/"
        });
        setCookie("type", type, {
            path: "/"
        });
    }

    const loginUser = (user) =>
        userService.loginUser(user)
            .then(state => {
                if (state.message === "Login success") {
                    handleCookie('user')
                    {
                        alert(state.message)
                    }
                    history.push('/profile/private/'+ state.user.username)
                } else {
                    alert(state.message)
                }
            })


    const loginAuthor = (user) =>
        authorService.loginAuthor(user)
            .then(state => {
                if (state.message === "Login success") {
                    handleCookie('author')
                    alert(state.message)
                    history.push('/profile/private/'+ state.user.username)
                } else {
                    alert(state.message)
                }

            })

    return (
        <>
            <NavigationComponent user={user.username} activeLink={'/login'}/>
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
                    className={`btn btn-success mt-1`}>Login as Reader
                </button>
                <button
                    onClick={() => loginAuthor(user)}
                    className={`btn btn-primary mt-1`}>Login as Author
                </button>

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

export default LoginScreen;