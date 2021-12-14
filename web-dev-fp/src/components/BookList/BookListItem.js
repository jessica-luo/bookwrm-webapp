const BookListItem = ({book}) => {

    return (
        <div className="mt-3">
            <div className="p-2 text-center"><img src={book.cover} width="150" height="200" alt=""/></div>
            <p className="mb-3">{book.title}
            <br/> by {book.author}
            <br/> {book.number_of_pages} pages </p>
        </div>
    );
};

export default BookListItem;