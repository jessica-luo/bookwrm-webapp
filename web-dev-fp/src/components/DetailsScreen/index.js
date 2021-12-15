import React, {useEffect, useLayoutEffect, useState} from "react";
import NavigationComponent from "../NavigationComponent";
import {Link, useParams} from "react-router-dom";
import Footer from "../FooterComponent";
import {findBookByISBNAPI, findBookDataByISBNAPI} from "../../services/detailsService";
import {useCookies} from "react-cookie";
import userService, {deleteCurrentlyReading, updateUser} from "../../services/userService";
import authorService from "../../services/authorService";
import bookService from "../../services/bookService";
import UserList from "../UserList";
import BookList from "../BookList";
import featuredbooks from "../HomeScreen/featuredbooks";
import trendingbooks from "../HomeScreen/trendingbooks";

const DetailsScreen = () => {
    const [cookies, setCookie] = useCookies();

    let {id} = useParams();
    const isbn = id || '9780980200447';
    const [book, setBook] = useState([isbn]);
    const isbnForObject = "ISBN:" + isbn
    const bookObject = book[isbnForObject]
    const userLog = cookies.user
    const loggedIn = typeof userLog !== "undefined"
    const [cover, setCover] = useState({cover: ''})

    const getBookDetails = () => {

        let fetchRes = findBookByISBNAPI(isbn)

        fetchRes.then(results => setBook(results))
        findBookDataByISBNAPI(isbn)
            .then(results => results[isbnForObject].hasOwnProperty('cover') ?
                setCover(results[isbnForObject].cover) : '')
    }

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
        friends: [],
        authoredList: []
    })

    useEffect(() => {
        findUserByUsername()
    }, [])

    const [bookDB, setBookDB] = useState([]);

    useEffect(() => {
        findBookByISBN()
    }, []);

    const findBookByISBN = () =>
        bookService.findBookByISBN(isbn)
            .then(
                book => {
                    try {
                        setBookDB(book.users_added)
                    } catch (e) {

                    }
                }
            )

    function findUserByUsername() {
        const isAuthor = cookies.type === 'author'
        if (!isAuthor) {
            userService.findUserByUsername(userLog)
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
                    } catch (e) {

                    }
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

                })
        }
    }

    const isAuthor = cookies.type === 'author'

    function deleteCurrentlyReading() {
        if (!isAuthor) {
            userService.deleteCurrentlyReading(user, isbn)
        } else {
            authorService.deleteCurrentlyReading(user, isbn)
        }
    }

    function deleteToRead() {
        if (!isAuthor) {
            userService.deleteToRead(user, isbn)
        } else {
            authorService.deleteToRead(user, isbn)
        }
    }

    function deleteRead() {
        if (!isAuthor) {
            userService.deleteRead(user, isbn)
        } else {
            authorService.deleteRead(user, isbn)
        }
    }


    function addCurrentlyReading() {
        if (!isAuthor) {
            userService.addCurrentlyReading(user,
                {
                    isbn: isbn,
                    title: book[isbnForObject].details.title,
                    author: book[isbnForObject].details.authors[0].name,
                    cover: cover.cover,
                    number_of_pages: book[isbnForObject].details.number_of_pages
                })
        } else {
            authorService.addCurrentlyReading(user,
                {
                    isbn: isbn,
                    title: book[isbnForObject].details.title,
                    author: book[isbnForObject].details.authors[0].name,
                    cover: cover.cover,
                    number_of_pages: book[isbnForObject].details.number_of_pages
                })
        }
        bookService.createBook({
            isbn: isbn,
            title: book[isbnForObject].details.title,
            author: book[isbnForObject].details.authors[0].name,
            cover: cover.cover,
            number_of_pages: book[isbnForObject].details.number_of_pages,
            users_added: []
        })
        bookService.addUserToBook(isbn, userLog)
    }

    function addToRead() {
        if (!isAuthor) {
            userService.addToRead(user,
                {
                    isbn: isbn,
                    title: book[isbnForObject].details.title,
                    author: book[isbnForObject].details.authors[0].name,
                    cover: cover.cover,
                    number_of_pages: book[isbnForObject].details.number_of_pages
                })
        } else {
            authorService.addToRead(
                user,
                {
                    isbn: isbn,
                    title: book[isbnForObject].details.title,
                    author: book[isbnForObject].details.authors[0].name,
                    cover: cover.cover,
                    number_of_pages: book[isbnForObject].details.number_of_pages
                })
        }
        bookService.createBook({
            isbn: isbn,
            title: book[isbnForObject].details.title,
            author: book[isbnForObject].details.authors[0].name,
            cover: cover.cover,
            number_of_pages: book[isbnForObject].details.number_of_pages,
            users_added: []
        })
        bookService.addUserToBook(isbn, userLog)
    }

    function addRead() {
        if (!isAuthor) {
            userService.addRead(user,
                {
                    isbn: isbn,
                    title: book[isbnForObject].details.title,
                    author: book[isbnForObject].details.authors[0].name,
                    cover: cover.cover,
                    number_of_pages: book[isbnForObject].details.number_of_pages
                })
        } else {
            authorService.addRead(user,
                {
                    isbn: isbn,
                    title: book[isbnForObject].details.title,
                    author: book[isbnForObject].details.authors[0].name,
                    cover: cover.cover,
                    number_of_pages: book[isbnForObject].details.number_of_pages
                })
        }
        bookService.createBook({
            isbn: isbn,
            title: book[isbnForObject].details.title,
            author: book[isbnForObject].details.authors[0].name,
            cover: cover.cover,
            number_of_pages: book[isbnForObject].details.number_of_pages,
            users_added: []
        })
        bookService.addUserToBook(isbn, userLog)
    }

    return (
        <>
            <NavigationComponent activeLink={'/details/'}/>
            <br/><br/><br/>

            <div className="container">
                <h1 className="text-success">Book Details</h1>
                <div className="row p-4 rounded">
                    <div className="col text-secondary">
                        <ul className="list-group mb-4">
                            {
                                bookObject &&
                                <div>
                                    <li className="list-group-item">
                                        <p hidden={!loggedIn}>
                                            <button hidden={!loggedIn || user.currentlyReadingList
                                                .some(element => parseInt(element.isbn) === parseInt(isbn))}
                                                    onClick={() => addCurrentlyReading()}
                                                    className="btn btn-success float-end ms-2">
                                                Add to Currently Reading
                                            </button>
                                            <button hidden={!loggedIn || !user.currentlyReadingList
                                                .some(element => parseInt(element.isbn) === parseInt(isbn))}
                                                    onClick={() => deleteCurrentlyReading()}
                                                    className="btn btn-danger float-end ms-2">
                                                Delete from Currently Reading
                                            </button>
                                            <button hidden={!loggedIn || user.toReadList
                                                .some(element => parseInt(element.isbn) === parseInt(isbn))}
                                                    onClick={() => addToRead()}
                                                    className="btn btn-warning float-end ms-2">
                                                Add To Your To-Read
                                            </button>
                                            <button hidden={!loggedIn || !user.toReadList
                                                .some(element => parseInt(element.isbn) === parseInt(isbn))}
                                                    onClick={() => deleteToRead()}
                                                    className="btn btn-danger float-end ms-2">
                                                Delete From To-Read List
                                            </button>
                                            <button hidden={!loggedIn || user.readList
                                                .some(element => parseInt(element.isbn) === parseInt(isbn))}
                                                    onClick={() => addRead()}
                                                    className="btn btn-primary float-end ms-2">
                                                Add To Already Read
                                            </button>
                                            <button hidden={!loggedIn || !user.readList
                                                .some(element => parseInt(element.isbn) === parseInt(isbn))}
                                                    onClick={() => deleteRead()}
                                                    className="btn btn-danger float-end ms-2">
                                                Delete From Already Read List
                                            </button>
                                        </p>
                                        <h3>
                                            {bookObject['details'].title.toString()}
                                        </h3>
                                        <img src={bookObject.thumbnail_url}/>
                                    </li>
                                    <li className="list-group-item">
                                        <b>bib_key:</b> {bookObject.bib_key.replace(/:/g, ": ")}
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
                                    <li className="list-group-item"><b>Publish
                                        Date:</b> {bookObject['details'].publish_date}
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
                                                <div>
                                                    {
                                                        bookObject['details'] && bookObject['details']['subjects'] && bookObject['details']['subjects'].map(details =>

                                                            <li className="list-group-item">
                                                                {details}
                                                            </li>
                                                        )

                                                    }
                                                </div>
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
                    <div className="col text-secondary">
                        <UserList list={bookDB} listType={"Users With This Book On Their To-Read"}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default DetailsScreen;