const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    isbn: Number,
    title: String,
    author: String,
    cover: {
        large: String,
        medium: String,
        small: String
    },
    number_of_pages: Number,
    subjects: [String],
    publishers: [String],
    description: String,
    publish_date : String
}, {collection: "book-data"});
module.exports = bookSchema;
