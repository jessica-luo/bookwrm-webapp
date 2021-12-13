const dao = require('../db/book/book-dao')

module.exports = (app) => {
    const findAllBooks = (req, res) =>
        dao.findAllBooks()
            .then(books => res.json(books));
    const findBookByISBN = (req, res) =>
        dao.findBookByISBN(req.params.isbn)
            .then(book => res.json(book));
    const createBook = (req, res) =>
        dao.createBook(req.body)
            .then((insertedBook) => res.json(insertedBook));

    app.post("/rest/books", createBook);
    app.get("/rest/books", findAllBooks);
    app.get("/rest/books/:isbn", findBookByISBN);
}

