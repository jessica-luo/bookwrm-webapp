const model = require('./book-model');

const findAllBooks = () => model.find();

module.exports = {
    findAllBooks
};

