import BookListItem from "./BookListItem";

const BookList = (params) => {
    const list = params.list
    return (
        <ul className={"list-group"}>
            {
                list.map(book => {
                    return (<BookListItem book={book}/>);
                })
            }
        </ul>
    );
}
export default BookList;