import {ListGroupItem} from "reactstrap";
import React from "react";

const BookListItem = ({book}) => {

    return (
        <ListGroupItem className="p-4">
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