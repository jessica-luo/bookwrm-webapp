const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    name: String,
    top_work: String,
    key: String,
    birth_date: String,
    books_list: [Number],
    bio: String
}, {collection: "author-data"});
module.exports = authorSchema;
