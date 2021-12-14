import React, {useEffect} from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {useState, useLayoutEffect} from "react";
import userService, {findUserByUsername, updateUser} from "../../services/userService";
import authorService, {findAuthorByUsername, updateAuthor} from "../../services/authorService";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import BookList from "../BookList";

//const selectProfile = (state) => state.profile;

const ProfileScreen = (params) => {
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies();

    function clearCookies() {
        removeCookie("user", {
            path: "/"
        });
        removeCookie("loggedIn", {
            path: "/"
        });
        removeCookie("type", {
            path: "/"
        });
        history.push('/home')
    }

    const privateProfile = params.match.params.authorized

    const [user, setUser] = useState({
        _id: '',
        username: cookies.user,
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        toReadList: [],
        readList: [],
        currentlyReadingList: [],
        friends: []
    })

    useEffect(() => {
        findUserByUsername()
    }, [])


    function findUserByUsername() {
        const isAuthor = cookies.type === 'author'
        if (!isAuthor) {
            userService.findUserByUsername(cookies.user)
                .then(theUser => {
                    setUser({
                        _id: theUser._id,
                        username: theUser.username,
                        password: theUser.password,
                        email: theUser.email,
                        firstName: theUser.firstName,
                        lastName: theUser.lastName,
                        toReadList: theUser.toReadList,
                        currentlyReadingList: theUser.currentlyReadingList,
                        friends: theUser.friends,
                        readList: theUser.readList,
                    })
                    // console.log(theUser)
                    console.log(user)
                })
        } else if (isAuthor) {
            authorService.findAuthorByUsername(cookies.user)
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
        updateUser(user)
    //console.log(loginState)
    // (isAuthor ? updateAuthor(user) : updateUser(user))

    {
        return (
            <>
                <NavigationComponent activeLink={`/login/${user.username}`}/>

                <div className={"container main-container bg-none"}>
                    <h1 className="mt-5 text-success">Public Profile </h1>
                    <h4 className="text-primary">@{cookies.user}</h4>


                    <div className="text-success mt-5 mb-5" hidden={cookies.loggedIn}>
                        <h3> Log in <a href={`/login/${user.username}`}>here</a> to view your profile!</h3>
                    </div>

                    <div className="mb-5" hidden={!user.username}>
                        <h1 className="mt-5 text-success">Public Profile </h1>
                        <h4 className="text-primary">{user.firstName} {user.lastName} @{cookies.loggedIn}</h4>
                        <h5>*****put their book lists here*****</h5>
                        <div className={"row"}>
                            <div className={"col"}>
                                <h5>To Read</h5>
                                <BookList list={user.toReadList}/>
                            </div>
                            <div className={"col"}>
                                <h5>Read</h5>
                                <BookList list={user.readList}/>
                            </div>
                            <div className={"col"}>
                                <h5>Currently Reading</h5>
                                <BookList list={user.currentlyReadingList}/>
                            </div>

                        </div>


                        <h1 className="mt-5 text-success">Your User Details </h1>
                        Username: @{cookies.user} <br/>
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
                        <div className="mb-5" hidden={!cookies.loggedIn}>

                            <div hidden={!privateProfile}>
                                <h2 className="mt-5 text-success">Your Profile Details</h2>
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
                    </div>
                    <button onClick={() => {
                        clearCookies()
                        console.log(cookies)
                    }}
                            className={`btn btn-success`}>Logout
                    </button>
                </div>
                <Footer/>
            </>
        )
    }
}
export default ProfileScreen;