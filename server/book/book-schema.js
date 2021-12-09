const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    isbn: Number,
    title: String,
    author: String,
    number_of_pages: Number,
    subjects: [String]
}, {collection: "book-data"});
module.exports = bookSchema;
