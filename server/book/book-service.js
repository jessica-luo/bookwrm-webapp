const dao = require('./book-dao')

module.exports = (app) => {
    const findAllBooks = (req, res) =>
        dao.findAllBooks()
            .then(books => res.json(books));

    app.get("/rest/books", findAllBooks);
}

