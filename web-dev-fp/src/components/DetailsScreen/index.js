import React, {useEffect, useState} from "react";
import NavigationComponent from "../NavigationComponent";
import {Link, useParams} from "react-router-dom";
import Footer from "../FooterComponent";

import {findBookByISBNAPI} from "../../services/detailsService";


const DetailsScreen = () => {
    let { id } = useParams();
    const isbn = id || '9780980200447';
    const [book, setBook] = useState([isbn]);
    const isbnForObject = "ISBN:" + isbn
    const bookObject = book[isbnForObject]

    const getBookDetails = () =>
    {

        let fetchRes = findBookByISBNAPI(isbn)

        fetchRes.then(results => setBook(results))
    }


    console.log("bookObject", bookObject)
    useEffect(getBookDetails, []);
    return (
        <>
            <NavigationComponent activeLink={'/details/'}/>
            <br/><br/><br/>
            <div className="container">
                <h1>Details Screen</h1>
                <div>

                </div>
                <ul className="list-group">
                    {
                        bookObject &&
                            <div>
                                <li className="list-group-item">
                                    <button
                                        className="btn btn-success float-end ms-2">
                                        Add
                                    </button>
                                    <img src={bookObject.thumbnail_url}/>
                                    <h3>
                                        {bookObject['details'].title.toString()}
                                    </h3>
                                </li>
                                <li className="list-group-item">bib_key: {bookObject.bib_key}</li>
                                <li className="list-group-item">Info URL: {bookObject.info_url}</li>
                                <li className="list-group-item">Preview URL: {bookObject.preview_url}</li>
                                <li className="list-group-item">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <tr>
                                                    <td>
                                                        Author
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

                                <li className="list-group-item">Author(s):
                                    {
                                        bookObject['details'] && bookObject['details']['authors'].map(details =>
                                            <li className="list-group-item">
                                                {details.name}
                                            </li>)

                                    }
                                </li>


                                <li className="list-group-item">Contributors(s):
                                    {
                                        bookObject['details'] && bookObject['details']['contributors'] && bookObject['details']['contributors'].map(details =>
                                            <li className="list-group-item">
                                                {details.name} - {details.role}
                                            </li>)

                                    }
                                </li>
                                <li className="list-group-item">
                                    Description:
                                    <li className="list-group-item">
                                        {bookObject['details'].description}
                                    </li></li>
                                <li className="list-group-item">Number of Pages: {bookObject['details'].number_of_pages}{bookObject['details'].pagination}</li>
                                <li className="list-group-item">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <tr>
                                                <td>
                                                    Languages(s):
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
                                <li className="list-group-item">Publish Date: {bookObject['details'].publish_date}</li>
                                <li className="list-group-item">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <tr>
                                                <td>
                                                    Subject(s):
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
                                                    Table of Contents
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