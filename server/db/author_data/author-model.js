const mongoose = require('mongoose');
const schema = require('./author-schema');
const model = mongoose.model('AuthorDataModel', schema);
module.exports = model;