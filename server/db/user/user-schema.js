const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String,
    toReadList: [{
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
    }],
    readList: [{
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
    }],
    currentlyReadingList: [{
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
    }],
    friends: [String]
}, {collection: "users"});
module.exports = userSchema;
