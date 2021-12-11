import React, {useEffect, useState} from "react";
import NavigationComponent from "../NavigationComponent";
import {Link, useParams} from "react-router-dom";
import Footer from "../FooterComponent";


const DetailsScreen = () => {
    const params = useParams();
    // let navigate = useNavigate();
    const isbn = params.searchTerm || '9780980200447';
    // const [searchTerm, setSearchTerm] = useState(isbn);
    const [book, setBook] = useState([]);


    const getBookDetails = () =>
    {
        let fetchRes = fetch(
            `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`);

        fetchRes.then(res =>
            res.json()).then(d => {
                // console.log(" hi", d)
            setBook(d.Search)
        }).then(results => console.log("hi", book))
    }

    console.log("book", book)
    useEffect(getBookDetails, []);
    return (
        <>
            <NavigationComponent activeLink={'/details'}/>
            <br/><br/><br/>
            <div className="container">
                <h1>Details Screen</h1>
                {/*<li key={book.details._id}*/}
                {/*    className="list-group-item">*/}
                {/*    <button*/}
                {/*        className="btn btn-success float-end ms-2">*/}
                {/*        Add*/}
                {/*    </button>*/}
                {/*    <table>*/}
                {/*        <tbody>*/}
                {/*        <tr>*/}
                {/*            <td className="align-text-top">*/}
                {/*                <h4>{book.details.title}</h4>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                Image*/}
                {/*            </td>*/}
                {/*            <td>*/}

                {/*            </td>*/}
                {/*        </tr>*/}
                {/*        <tr>*/}
                {/*            <td>Author: {book.details.author_name}</td>*/}
                {/*            <td>Date Published: {book.details.first_publish_year}</td>*/}
                {/*            <td>ISBN: </td>*/}
                {/*        </tr>*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*</li>*/}
            </div>
            <h1>Details Screen</h1>
            <Footer/>
        </>
    )
};

export default DetailsScreen;