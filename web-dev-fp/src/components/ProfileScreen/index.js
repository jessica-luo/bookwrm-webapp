import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {useState, useLayoutEffect} from "react";
import loginStore from "../../store/login";
import {findUserByUsername, updateUser} from "../../services/userService";

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

    const [userLog, setUserLog] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    let userDetails
    if (loggedIn) {
        findUserByUsername(loginState.username).then(user => {
            //console.log(user)
            userDetails = user
            setUserLog({
                ...user,
                username: userDetails.username,
                password: userDetails.password,
                email: userDetails.email,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName
            })
            //console.log(userDetails)
        })
    }

    const edit = (user) =>
        //updateUser(user)
        console.log(loginState)
        // authorService.updateAuthor(user)
        //     .then(state => {
        //         console.log(state)
        //     })

    {
        return (
            <>
                <NavigationComponent activeLink={'/login'} loggedIn={loggedIn}/>

                <div className={"container main-container bg-none"}>
                    <div className="text-success mt-5 mb-5" hidden={loggedIn}>
                        <h3> Log in <a href={"/login"}>here</a> to view your profile!</h3>
                    </div>

                    <div className="mb-5" hidden={!loggedIn}>
                        <h1 className="mt-5 text-success">Public Profile </h1>
                        <h4 className="text-primary">{userLog.firstName} {userLog.lastName} @{loggedInUser}</h4>

                        <h1 className="mt-5 text-success">Your User Details </h1>
                        Username: {loggedInUser} <br/>
                        Password: {userLog.password} <br/>
                        Email: {userLog.email} <br/>
                        First Name: {userLog.firstName} <br/>
                        Last Name: {userLog.lastName}

                        <h2 className="mt-5 text-success">Update Your Profile</h2>
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


                </div>
                <Footer/>
            </>
        )
    }
};

export default ProfileScreen;