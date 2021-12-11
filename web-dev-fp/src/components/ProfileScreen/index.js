import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {useState, useLayoutEffect} from "react";
import loginStore from "../../store/login";

const ProfileScreen = () => {
    const [loginState, setLoginState] = useState(loginStore.initialState)

    useLayoutEffect(() => {
        loginStore.subscribe(setLoginState);
        loginStore.init();
    }, []);

    const loggedInUser = loginState.username
    const loggedIn = loginState.username !== ''

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    const edit = (user) =>
        console.log(user)

    {
        return (
            <>
                <NavigationComponent activeLink={'/login'} loggedIn={loggedIn}/>

                <div className={"container main-container bg-none"}>

                    <h1 className={"mt-5"}>Update Profile</h1>
                    <input value={user.username}
                           onChange={(e) => setUser({
                               ...user,
                               username: e.target.value,
                               password: user.password,
                               email: user.email,
                               firstName: user.firstName,
                               lastName: user.lastName
                           })}
                           placeholder={"username"} className={`form-control mt-1`}/>
                    <input value={user.password}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password: e.target.value,
                               email: user.email,
                               firstName: user.firstName,
                               lastName: user.lastName
                           })}
                           placeholder={"password"} type={"password"} className={`form-control mt-1`}/>
                    <input value={user.email}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password: user.password,
                               email: e.target.value,
                               firstName: user.firstName,
                               lastName: user.lastName
                           })}
                           placeholder={"email"} className={`form-control mt-1`}/>
                    <input value={user.firstName}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password: user.password,
                               email: user.email,
                               firstName: e.target.value,
                               lastName: user.lastName
                           })}
                           placeholder={"first name"} className={`form-control mt-1`}/>
                    <input value={user.lastName}
                           onChange={(e) => setUser({
                               ...user,
                               username: user.username,
                               password: user.password,
                               email: user.email,
                               firstName: user.firstName,
                               lastName: e.target.value
                           })}
                           placeholder={"last name"} className={`form-control mt-1`}/>
                    <button onClick={() => edit(user)}
                            className={`btn btn-success`}>Update Profile
                    </button>

                </div>
                <Footer/>
            </>
        )
    }
};

export default ProfileScreen;