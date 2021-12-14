import React, {useEffect} from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {useState, useLayoutEffect} from "react";
import loginStore from "../../store/login";
import userService, {findUserByUsername, updateUser} from "../../services/userService";
import authorService, {findAuthorByUsername, updateAuthor} from "../../services/authorService";

//const selectProfile = (state) => state.profile;

const ProfileScreen = (params) => {
    console.log(params)

    const userProfile = params.match.params.id
    const privateProfile = params.match.params.authorized === 'private'

    const [loginState, setLoginState] = useState(loginStore.initialState)
    useLayoutEffect(() => {
        loginStore.subscribe(setLoginState);
        loginStore.init();
    }, []);

    const loggedInUser = loginState.username
    const loggedIn = loginState.username !== ''
    const isAuthor = loginState.type === 'author'

    // let userDetails
    // if (loggedIn) {
    //     userService.findUserByUsername(loginState.username).then(user => {
    //         console.log(user)
    //         userDetails = user
    //         console.log(userDetails)
    //     })
    // }

    const [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    useEffect(() => {
        findUserByUsername()
    }, [])


    function findUserByUsername() {
        if (!isAuthor) {
            userService.findUserByUsername(userProfile)
                .then(theUser => {
                    setUser({
                        username: theUser.username,
                        password: theUser.password,
                        email: theUser.email,
                        firstName: theUser.firstName,
                        lastName: theUser.lastName
                    })
                    // console.log(theUser)
                    // console.log(user)
                })
        } else if (isAuthor) {
            authorService.findAuthorByUsername(userProfile)
                .then(theUser => {
                    setUser({
                        username: theUser.username,
                        password: theUser.password,
                        email: theUser.email,
                        firstName: theUser.firstName,
                        lastName: theUser.lastName
                    })
                    // console.log(theUser)
                    // console.log(user)
                })
        }
    }

    const edit = (user) =>
        //console.log(loginState)
        (isAuthor ? updateAuthor(user) : updateUser(user))

    {
        return (
            <>
                <NavigationComponent activeLink={`/login/${user.username}`} loggedIn={user.username}/>

                <div className={"container main-container bg-none"}>
                    <div className="text-success mt-5 mb-5" hidden={loggedIn}>
                        <h3> Log in <a href={`/login/${user.username}`}>here</a> to view your profile!</h3>
                    </div>

                    <div className="mb-5" hidden={!user.username}>
                        <h1 className="mt-5 text-success">Public Profile </h1>
                        <h4 className="text-primary">{user.firstName} {user.lastName} @{loggedInUser}</h4>

                        <h1 className="mt-5 text-success">Your User Details </h1>
                        Username: {loggedInUser} <br/>
                        Password: {user.password} <br/>
                        Email: {user.email} <br/>
                        First Name: {user.firstName} <br/>
                        Last Name: {user.lastName} <br/>

                        <button onClick={() => findUserByUsername()}
                                className={`btn btn-success`}>
                            Show Profile Details
                        </button>

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