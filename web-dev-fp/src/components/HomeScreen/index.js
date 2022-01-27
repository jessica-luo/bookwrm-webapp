import NavigationComponent from "../NavigationComponent";
import featuredbooks from "./featuredbooks";
import trendingbooks from "./trendingbooks";
import Footer from "../FooterComponent";
import BookList from "../BookList";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import userService from "../../services/userService";
import authorService from "../../services/authorService";

const HomeScreen = () => {
    const [cookies] = useCookies();

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
        if (cookies.hasOwnProperty('user') && cookies.loggedIn === true) {
            findUserByUsername()
        }
    }, [cookies, findUserByUsername])


    useEffect(() => {
        findUserByUsername()
    }, [findUserByUsername])

    function findUserByUsername() {
        const isAuthor = cookies.type === 'author'
        if (!isAuthor) {
            userService.findUserByUsername(cookies.user)
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
                            readList: theUser.readList,
                        })
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
                        readList: theUser.readList
                    })
                    // console.log(theUser)
                    // console.log(user)
                })
        }
    }

    return (
        <>
            <NavigationComponent activeLink={'/home'}/>
            <h1 className="text-center mt-5 text-success font-weight-bold">BookWrm <i className={"fas fa-book"}/></h1>
            <p className="text-center">/ˈbo͝okˌwərm/</p>
            <p className="text-center"> 1. a person unusually devoted to reading and study</p>
            <div className={"container main-container bg-none mt-5"}>
                <div className="container">
                    <div className="row p-4 border rounded">
                        <div className="col text-secondary">
                            <h2 className="text-success">Featured</h2>
                            <BookList list={featuredbooks}/>
                        </div>
                        <div className="col text-secondary">
                            <h2 className="text-success">Trending</h2>
                            <BookList list={trendingbooks}/>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="row p-4 border rounded">
                        <div className="col text-secondary">
                            <h2 className="text-success">Your To-Read List</h2>
                            <div hidden={cookies.loggedIn}>
                                Log in <a href={"/login"}>here</a> to add to your list!
                            </div>
                            <div hidden={!cookies.loggedIn}>
                                <BookList list={user.toReadList}/>
                            </div>
                        </div>
                        <div className="col text-secondary">
                            <h2 className="text-success">Revisit: Books You've Recently Finished</h2>
                            <div hidden={cookies.loggedIn}>
                                Log in <a href={"/login"}>here</a> to add to your list!
                            </div>
                            <div hidden={!cookies.loggedIn}>
                                <BookList list={user.readList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default HomeScreen;
