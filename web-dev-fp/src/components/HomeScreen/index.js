import NavigationComponent from "../NavigationComponent";
import BookListItem from "../BookList/BookListItem";
import featuredbooks from "./featuredbooks";
import trendingbooks from "./trendingbooks";
import Footer from "../FooterComponent";
import BookList from "../BookList";
import loginStore from "../../store/login";
import {Link, useHistory} from "react-router-dom";
import {useState, useLayoutEffect} from "react";
import userService from "../../services/userService";

const HomeScreen = () => {
    const [loginState, setLoginState] = useState(loginStore.initialState)

    useLayoutEffect(() => {
        loginStore.subscribe(setLoginState);
        loginStore.init();
    }, []);

    const loggedIn = loginState.username !== ''

    let toReadList
    let recentlyRead
    let userDetails
    if (loggedIn) {
        userService.findUserByUsername(loginState.username).then(user => {
            console.log(user)
            userDetails = user
            console.log(userDetails)
        })
    }

    return (
        <>
            <NavigationComponent activeLink={'/home'} loggedIn={loggedIn}/>
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
                        <div className="col text-success"><h2>Your To-Read List</h2></div>
                        <div className="col text-success"><h2>Revisit: Books You've Recently Finished</h2></div>
                        <div className="w-100"></div>
                        <div className="col text-secondary">
                            <div hidden={loggedIn}>
                                Log in <a href={"/login"}>here</a> to add to your list!
                            </div>
                            <div hidden={!loggedIn}>

                            </div>

                        </div>
                        <div className="col text-secondary">
                            <div hidden={loggedIn}>
                                Log in <a href={"/login"}>here</a> to add to your list!
                            </div>
                            <div hidden={!loggedIn}>

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
