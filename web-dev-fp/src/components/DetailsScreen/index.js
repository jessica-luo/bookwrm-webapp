import React, {useEffect, useLayoutEffect, useState} from "react";
import NavigationComponent from "../NavigationComponent";
import {Link, useParams} from "react-router-dom";
import Footer from "../FooterComponent";

import {findBookByISBNAPI} from "../../services/detailsService";
import {useCookies} from "react-cookie";
import userService, {updateUser} from "../../services/userService";
import authorService from "../../services/authorService";

const DetailsScreen = () => {
    const [cookies, setCookie] = useCookies();

    let {id} = useParams();
    const isbn = id || '9780980200447';
    const [book, setBook] = useState([isbn]);
    const isbnForObject = "ISBN:" + isbn
    const bookObject = book[isbnForObject]
    const userLog = cookies.user
    const loggedIn = typeof userLog !== "undefined"
    //console.log(loggedIn)

    const getBookDetails = () => {

        let fetchRes = findBookByISBNAPI(isbn)

        fetchRes.then(results => setBook(results))
    }

    //console.log("bookObject", bookObject)
    useEffect(getBookDetails, []);

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
            userService.findUserByUsername(userLog)
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
                    //console.log(user)
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

    const addCurrentlyReading = () =>
        userService.addCurrentlyReading(user, isbn)

    const addToRead = () =>
        userService.addToRead(user, isbn)

    const addRead = () =>
        userService.addRead(user, isbn)

    return (
        <>
            <NavigationComponent activeLink={'/details/'}/>
            <br/><br/><br/>
            <div className="container">
                <h1 className="text-success">Book Details</h1>
                <div>

                </div>
                <ul className="list-group">
                    {
                        bookObject &&
                        <div>
                            <li className="list-group-item">
                                <button hidden={!loggedIn}
                                        onClick={() => addCurrentlyReading()}
                                    className="btn btn-success float-end ms-2">
                                    Add Currently Reading
                                </button>
                                <button hidden={!loggedIn}
                                        onClick={() => addToRead()}
                                        className="btn btn-warning float-end ms-2">
                                    Add To Your To-Read
                                </button>
                                <button hidden={!loggedIn}
                                        onClick={() => addRead()}
                                        className="btn btn-primary float-end ms-2">
                                    Add To Already Read
                                </button>
                                <img src={bookObject.thumbnail_url}/>
                                <h3>
                                    {bookObject['details'].title.toString()}
                                </h3>
                            </li>
                            <li className="list-group-item"><b>bib_key:</b> {bookObject.bib_key.replace(/:/g, ": ")}
                            </li>
                            <li className="list-group-item"><b>Info URL:</b> <a
                                href={bookObject.info_url}>{bookObject.info_url}</a></li>
                            <li className="list-group-item"><b>Preview URL:</b> <a
                                href={bookObject.preview_url}>{bookObject.preview_url}</a></li>
                            <li className="list-group-item">
                                <table>
                                    <tbody>
                                    <tr>
                                        <tr>
                                            <td>
                                                <b>Author</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {
                                                    bookObject['details'] && bookObject['details']['authors'].map(details =>
                                                        <li className="list-group-item">
                                                            {details.name}
                                                        </li>)

                                                }
                                            </td>
                                        </tr>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>

                            <li className="list-group-item"><b>Author(s):</b>
                                {
                                    bookObject['details'] && bookObject['details']['authors'].map(details =>
                                        <li className="list-group-item">
                                            {details.name}
                                        </li>)

                                }
                            </li>


                            <li className="list-group-item"><b>Contributors(s):</b>
                                {
                                    bookObject['details'] && bookObject['details']['contributors'] && bookObject['details']['contributors'].map(details =>
                                        <li className="list-group-item">
                                            {details.name} - {details.role}
                                        </li>)

                                }
                            </li>
                            <li className="list-group-item">
                                <b>Description:</b>
                                <li className="list-group-item">
                                    {bookObject['details'].description}
                                </li>
                            </li>
                            <li className="list-group-item"><b>Number of
                                Pages:</b> {bookObject['details'].number_of_pages}{bookObject['details'].pagination}
                            </li>
                            <li className="list-group-item">
                                <table>
                                    <tbody>
                                    <tr>
                                        <tr>
                                            <td>
                                                <b>Languages(s):</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            {
                                                bookObject['details'] && bookObject['details']['languages'].map(details =>
                                                    <td>
                                                        <li className="list-group-item">
                                                            {details.key}
                                                        </li>
                                                    </td>
                                                )
                                            }
                                        </tr>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="list-group-item"><b>Publish Date:</b> {bookObject['details'].publish_date}
                            </li>
                            <li className="list-group-item">
                                <table>
                                    <tbody>
                                    <tr>
                                        <tr>
                                            <td>
                                                <b>Subject(s):</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            {
                                                bookObject['details'] && bookObject['details']['subjects'] && bookObject['details']['subjects'].map(details =>
                                                    <td>
                                                        <li className="list-group-item">
                                                            {details}
                                                        </li>
                                                    </td>
                                                )

                                            }
                                        </tr>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>
                            <li className="list-group-item">
                                <table>
                                    <tbody>
                                    <tr>
                                        <tr>
                                            <td>
                                                <b>Table of Contents</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            {/*<td>*/}
                                            {/*    {*/}
                                            {/*        bookObject['details'] && bookObject['details']['table_of_contents'] && bookObject['details']['table_of_contents'].map(details =>*/}
                                            {/*            <li className="list-group-item">*/}
                                            {/*                Chapter - {details.title}*/}
                                            {/*            </li>)*/}

                                            {/*    }*/}
                                            {/*</td>*/}
                                        </tr>
                                    </tr>
                                    </tbody>
                                </table>
                            </li>


                        </div>

                    }
                </ul>
            </div>
            <Footer/>
        </>
    )
};

export default DetailsScreen;