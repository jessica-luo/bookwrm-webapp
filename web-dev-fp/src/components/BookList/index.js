import BookListItem from "./BookListItem";
import React from "react";
import {ListGroup} from "reactstrap";

const BookList = (params) => {
    const list = params.list || []
    return (
        <ListGroup className={"list-group"}>
            {
                list.map(book => {
                    return (<BookListItem book={book}/>);
                })
            }
        </ListGroup>
    );
}
export default BookList;