import React, {useEffect, useState} from "react";
import NavigationComponent from "../NavigationComponent";
import bookService from "../../services/bookService";

const HomeScreen = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        return bookService.findAllBooks()
            .then(books => setBooks(books));
    }, []);
    return (
        <>
            <div>
                <NavigationComponent activeLink={'/home'}/>
                <div className={"container main-container"}>
                    <ul className="list-group">
                        {
                            books.map(book =>
                                <li key={book._id}
                                    className="list-group-item">
                                    {book.title}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>


        </>
    )
};

export default HomeScreen;