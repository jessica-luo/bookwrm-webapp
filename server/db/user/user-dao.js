const model = require('./user-model');

const findAllUsers = () => model.find();

const createUser = (user) =>
    model.create(user);

const findUserByUsername = (username) =>
    model.findOne({username: username});

const findUserByCredentials = (username, password) =>
    model.findOne({username: username, password: password});

const findUserById = (id) =>
    model.findOne({_id: id});

const deleteUser = (id) =>
    model.deleteOne({_id: id});

const updateUser = (id, user) =>
    model.updateOne({_id: id},
        {$set: user});

const addToReadUser = (_id, isbn) =>
    model.updateOne({ _id: _id},
        { $push: { toReadList: isbn }});

const addReadUser = (_id, isbn) =>
    model.updateOne({ _id: _id},
        { $push: { readList: isbn }});

const addCurrentlyReadingUser = (_id, isbn) =>
    model.updateOne({ _id: _id},
        { $push: { currentlyReadingList: isbn }});

const deleteToReadUser = (_id, isbn) =>
    model.updateOne({ _id: _id},
        { $pull: { toReadList: isbn }});

const deleteReadUser = (_id, isbn) =>
    model.updateOne({ _id: _id},
        { $pull: { readList: isbn }});

const deleteCurrentlyReadingUser = (_id, isbn) =>
    model.updateOne({ _id: _id},
        { $pull: { readList: isbn }});


module.exports = {
    findAllUsers, createUser, findUserByUsername, deleteUser, updateUser,
    addCurrentlyReadingUser, addReadUser, addToReadUser, deleteCurrentlyReadingUser, deleteReadUser, deleteToReadUser,
    findUserByCredentials, findUserById
};

