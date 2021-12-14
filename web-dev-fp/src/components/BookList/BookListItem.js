import {ListGroupItem} from "reactstrap";
import React from "react";
import DetailsScreen from "../DetailsScreen";

const BookListItem = ({book}) => {

    return (
        <ListGroupItem className="p-4 list-group-item-action">
            <a href={`/details/${book.isbn}`}>
                <button
                    onClick={() => DetailsScreen(book.isbn)}
                    className="btn btn-warning float-end ms-2">
                    Details
                </button>
            </a>
            <div className="p-2 text-center">
                <img src={book.cover} width="150" height="200" alt=""/>
            </div>
            <p className="mb-3">
                <b>{book.title}</b>
                <br/> <i>by {book.author}</i>
                <br/> <span className={"wd-book-pages"}>{book.number_of_pages} pages </span>
            </p>
        </ListGroupItem>
    );
};

export default BookListItem;