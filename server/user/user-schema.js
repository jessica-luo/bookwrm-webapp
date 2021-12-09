const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    toReadList: [Number],
    readList: [Number],
    currentlyReadingList: [Number]
}, {collection: "users"});
module.exports = userSchema;
