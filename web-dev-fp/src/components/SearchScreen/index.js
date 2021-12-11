import React, {useState, useEffect} from "react";

import {Link, useParams } from "react-router-dom";

import NavigationComponent from "../NavigationComponent";
import DetailsScreen from "../DetailsScreen";

import Footer from "../FooterComponent";


const SearchScreen = () => {
    const params = useParams();
    const bookTitle = params.searchTerm || 'batman';
    const [searchTerm, setSearchTerm] = useState(bookTitle);
    const [books, setBooks] = useState([]);

    const findBooks = () =>
    {

        let fetchRes = fetch(
            `https://openlibrary.org/search.json?title=${searchTerm}`);

        fetchRes.then(res =>
            res.json()).then(d => {
            setBooks(d.docs)
        }).then(results => console.log(books)).catch(e => console.log("error", e))
    }

    console.log("params", params)

    useEffect(findBooks, []);
    return (
        <>
            <NavigationComponent activeLink={'/search'}/>
            <br/><br/><br/>
            <div className="container">
                <h1>Search Screen</h1>
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
                                className="form-control"
                                style={{width: "80%"}}/>
                            <br/>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <table>
                            <tbody>
                            <tr>
                                <td className="align-text-top">
                                    <h1>Book Results</h1>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>
                    <li className="list-group-item">
                        <button
                            className="btn btn-success float-end ms-2">
                            Add
                        </button>
                        <table>
                            <tbody>
                            <tr>
                                <td className="align-text-top">
                                    <h4>Title of Book</h4>
                                </td>
                                <td>
                                    Image
                                </td>
                                <td>

                                </td>
                            </tr>
                            <tr>
                                <td>Author</td>
                                <td>Date Published</td>
                            </tr>
                            </tbody>
                        </table>
                    </li>
                        {
                            books && books.map(book =>
                                <li key={book._id}
                                    className="list-group-item">
                                    <button
                                        className="btn btn-success float-end ms-2">
                                        Add
                                    </button>
                                    <table style={{width: "100%"}}>
                                        <tbody>
                                        <tr>
                                            <td className="align-text-top">
                                                <h4>{book.title}</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Author: {book.author_name}</td>
                                            <td>Date Published: {book.first_publish_year}</td>
                                        </tr>
                                        <tr>
                                            <tr>ISBN: </tr>
                                            {
                                                book.isbn && book.isbn.map(bookisbn =>
                                                    <tr>
                                                        <td>
                                                            {bookisbn}
                                                        </td>
                                                        <td>
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
                                        </tr>
                                        </tbody>
                                    </table>
                                </li>
                            )
                        }
                </ul>
            </div>
            <h1>Search Screen</h1>
            <Footer/>
        </>
    )
};

export default SearchScreen;