const mongoose = require('mongoose');
const schema = require('./author-schema');
const model = mongoose.model('AuthorModel', schema);
module.exports = model;