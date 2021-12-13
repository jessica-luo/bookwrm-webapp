const mongoose = require('mongoose');
const authorSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    toReadList: [Number],
    readList: [Number],
    currentlyReadingList: [Number],
    authoredList: [Number]
}, {collection: "authors"});
module.exports = authorSchema;
