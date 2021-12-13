const model = require('./book-model');

const findAllBooks = () => model.find();

const findBookByISBN = (isbn) =>
    model.findOne({'isbn': isbn});

const createBook = (book) =>
    model.create(book);

module.exports = {
    findAllBooks, findBookByISBN, createBook
};

