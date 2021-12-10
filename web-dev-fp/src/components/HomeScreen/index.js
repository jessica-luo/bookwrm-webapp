import React, {useEffect, useState} from "react";
import NavigationComponent from "../NavigationComponent";
import BookListItem from "./BookListItem";
import featuredbooks from "./featuredbooks";
import trendingbooks from "./trendingbooks";

const HomeScreen = () => {
    return (
        <>
            <NavigationComponent activeLink={'/home'}/>
            <h1>Home Screen</h1>
            <h1 className="text-center mt-5 text-success font-weight-bold">BookWrm <i className={"fas fa-book"}/></h1>
            <p className="text-center">/ˈbo͝okˌwərm/</p>
            <p className="text-center"> 1. a person unusually devoted to reading and study</p>
            <div className={"container main-container bg-none mt-5"}>
                <div className="container">
                    <div className="row p-4 border rounded">
                        <div className="col text-success"> <h2>Featured</h2></div>
                        <div className="col text-success"> <h2>Trending</h2></div>
                        <div className="w-100"></div>
                        <div className="col text-secondary">
                            <ul className="list-group">
                                {
                                    featuredbooks.map(book =>
                                        <BookListItem book={book}/>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col text-secondary">
                            <ul className="list-group">
                                {
                                    trendingbooks.map(book =>
                                        <BookListItem book={book}/>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <div className="row p-4 border rounded">
                        <div className="col text-success"> <h2>Your To-Read List</h2></div>
                        <div className="col text-success"> <h2>Revisit: Books You've Recently Finished</h2></div>
                        <div className="w-100"></div>
                        <div className="col text-secondary">Books (when logged in?)</div>
                        <div className="col text-secondary">Books (when logged in?)</div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default HomeScreen;