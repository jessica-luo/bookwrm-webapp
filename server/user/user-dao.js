const model = require('./user-model');

const findAllUsers = () => model.find();

module.exports = {
    findAllUsers
};

