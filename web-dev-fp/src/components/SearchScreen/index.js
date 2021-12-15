import React, {useState, useEffect, useLayoutEffect} from "react";
import {Link, useParams} from "react-router-dom";
import NavigationComponent from "../NavigationComponent";
import DetailsScreen from "../DetailsScreen";
import Footer from "../FooterComponent";
import {useCookies} from "react-cookie";


const SearchScreen = () => {
    const [cookies, setCookie] = useCookies();

    function handleCookie() {
        setCookie("user", "hello", {
            path: "/"
        });
    }

    const params = useParams();
    const bookTitle = params.searchTerm || 'batman';
    const [searchTerm, setSearchTerm] = useState(bookTitle);
    const [books, setBooks] = useState([]);
    const [resultNum, setResultNum] = useState(0);

    const findBooks = () => {

        let fetchRes = fetch(
            `https://openlibrary.org/search.json?title=${searchTerm}`);

        fetchRes.then(res =>
            res.json()).then(d => {
            setBooks(d.docs)
            setResultNum(d.num_found)
        }).then(results => console.log(books)).catch(e => console.log("error", e))
    }

    console.log("params", params)

    useEffect(findBooks, []);
    return (
        <>
            <NavigationComponent activeLink={'/search'}/>
            <br/><br/><br/>
            <div className="container">
                <h1 className="text-success">Search Screen <i className="fas fa-search"></i></h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div>
                            <button
                                type="button"
                                onClick={findBooks}
                                className="btn btn-primary float-end">
                                Search
                            </button>
                            <input
                                onChange={(e) => setSearchTerm(e.target.value)}
                                value={searchTerm}
                                placeholder="Search for books here!"
                                className="form-control mt-3"
                                style={{width: "80%"}}/>
                            <br/>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <table>
                            <tbody>
                            <tr>
                                <td className="align-text-top">
                                    <h2>{resultNum} Book Results:</h2>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>
                    {
                        books && books.map(book =>
                            <li key={book._id}
                                className="list-group-item">
                                <table style={{width: "100%"}}>
                                    <tbody>
                                    <tr>
                                        <td className="align-text-top">
                                            <h3>{book.title}</h3>
                                        </td>
                                    </tr>
                                    <tr className="mb-5">
                                        <td>
                                            <h5>Author(s): </h5>
                                            {book.author_name.toString().replace(/,/g, ", ")}
                                        </td>
                                        <td className="float-end"><b>Year Published:</b> {book.first_publish_year}
                                        </td>
                                    </tr>
                                    <div className="mt-4">
                                        <tr><h5>ISBN:</h5></tr>
                                        {
                                            book.isbn && book.isbn.map(bookisbn =>
                                                <tr>
                                                    <td>
                                                        {bookisbn}
                                                    </td>
                                                    <td className="float-end">
                                                        <a href={`/details/${bookisbn}`}>
                                                            <button
                                                                onClick={() => DetailsScreen(bookisbn)}
                                                                className="btn btn-warning float-end ms-2">
                                                                Details
                                                            </button>
                                                        </a>

                                                    </td>
                                                </tr>
                                            )}
                                    </div>
                                    </tbody>
                                </table>
                            </li>
                        )
                    }
                </ul>
            </div>
            <Footer/>
        </>
    )
};

export default SearchScreen;