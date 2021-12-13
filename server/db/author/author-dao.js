const model = require('./author-model');

const findAllAuthors = () => model.find();

const createAuthor = (author) =>
    model.create(author);

const findAuthorByUsername = (username) =>
    model.findOne({'username': username});

const deleteAuthor = (id) =>
    model.deleteOne({_id: id});

const updateAuthor = (id, user) =>
    model.updateOne({_id: id},
        {$set: user});

module.exports = {
    findAllAuthors, createAuthor, findAuthorByUsername, deleteAuthor, updateAuthor
};

