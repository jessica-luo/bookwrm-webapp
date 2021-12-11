const BookListItem = ({book}) => {

    return (
        <div>
            <div className="p-2"><img src={book.cover} width="150" height="200" alt=""/></div>
            <p className="mb-3">{book.title} by {book.author}, {book.number_of_pages} pages</p>
        </div>
    );
};

export default BookListItem;