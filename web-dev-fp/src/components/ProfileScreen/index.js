import React, {useEffect} from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";
import {useState} from "react";
import userService, {updateUser} from "../../services/userService";
import authorService, {updateAuthor} from "../../services/authorService";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import BookList from "../BookList";
import UserList from "../UserList";
import {Button, Input, InputGroup} from "reactstrap";

//const selectProfile = (state) => state.profile;

const ProfileScreen = (params) => {
    const history = useHistory();
    const [cookies, removeCookie] = useCookies();
    const [friend, setFriend] = useState({username: ''})
    const [friends, setFriends] = useState([])

    console.log(cookies)

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

    const userPage = params.match.params.id
    const privateProfile = params.match.params.authorized === "private" && userPage === cookies.user
    console.log(params.match.params.authorized)

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
        friends: [],
        authoredList: []
    })

    useEffect(() => {
        findUserByUsername()
    }, [findUserByUsername])

    function findUserByUsername() {
        const isAuthor = cookies.type === 'author'
        if (!isAuthor) {
            userService.findUserByUsername(userPage)
                .then(theUser => {
                    try {
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
                            readList: theUser.readList
                        })
                        setFriends(theUser.friends)
                    } catch (e) {

                    }

                    // console.log(theUser)
                    //console.log(user)
                })
        } else if (isAuthor) {
            authorService.findAuthorByUsername(cookies.user)
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
                        authoredList: theUser.authoredList
                    })

                    setFriends(theUser.friends)
                    // console.log(theUser)
                    // console.log(user)
                })
        }
    }

    function addFriend() {
        console.log(friend.username)
        userService.addFriend(user._id, friend.username).then(status => {
            if (status.message === "User does not exist, cannot be added as a friend") {
                alert(status.message)
            } else {
                findUserByUsername()
            }
        })
    }

    function edit(user) {
        const isAuthor = cookies.type === 'author'
        if (!isAuthor) {
            updateUser({
                _id: user._id,
                username: user.username,
                password: user.password,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                toReadList: user.toReadList,
                currentlyReadingList: user.currentlyReadingList,
                friends: user.friends,
                readList: user.readList
            })
            alert('Update success, please login again')
        } else {
            updateAuthor({
                _id: user._id,
                username: user.username,
                password: user.password,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                toReadList: user.toReadList,
                readList: user.readList,
                currentlyReadingList: user.currentlyReadingList,
                authoredList: user.authoredList
            })
            alert('Update success please login again')
        }
    }


    return (
        <>
            <NavigationComponent activeLink={`/login/${user.username}`}/>

            <div className={"container page-content main-container bg-none"}>

                <div className="text-success mt-5 mb-5" hidden={cookies.loggedIn}>
                    <h3> Log in <a href={`/login`}>here</a> to create your own book lists!</h3>
                </div>

                <div className="mb-5" hidden={!user.username}>
                    <h2 className="mt-5 text-success">@{userPage}'s Public Profile </h2>
                    <div className="p-5" hidden={cookies.type === 'author'}>
                        <InputGroup hidden={privateProfile === false}>
                            <Input id="username-input" placeholder={"Enter username"}
                                   onChange={(e) => setFriend({username: e.target.value})}/>
                            <Button onClick={addFriend}>
                                Add Friend
                            </Button>
                        </InputGroup>
                        <UserList list={friends} listType={"Friends List"}/>
                    </div>

                    <div className={"row"}>
                        <div className={"col wd-book-list"}>
                            <h5>To Read</h5>
                            <BookList list={user.toReadList}/>
                        </div>
                        <div className={"col wd-book-list"}>
                            <h5>Read</h5>
                            <BookList list={user.readList}/>
                        </div>
                        <div className={"col wd-book-list"}>
                            <h5>Currently Reading</h5>
                            <BookList list={user.currentlyReadingList}/>
                        </div>
                        <div className={"col wd-book-list"} hidden={cookies.type !== 'author'}>
                            <h5>Authored List</h5>
                            <BookList list={user.authoredList}/>
                        </div>
                    </div>


                    <div className="mb-5" hidden={!cookies.loggedIn}>

                        <div hidden={!privateProfile}>
                            <h2 className="mt-5 text-success">Your Private Profile Details</h2>
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
                            <button onClick={() => {

                                edit(user)


                                clearCookies()

                            }}
                                    className={`btn btn-success`}>Update Profile
                            </button>
                        </div>

                    </div>
                </div>
                <button hidden={!privateProfile} onClick={() => {
                    clearCookies()
                    history.go(0)
                }}
                        className={`btn btn-success`}>Logout
                </button>
            </div>
            <Footer/>
        </>
    )

}
export default ProfileScreen;