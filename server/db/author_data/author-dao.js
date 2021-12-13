const model = require('./author-model');

const findAllAuthors = () => model.find();

const createAuthor = (author) =>
    model.create(author);

const findAuthorByName = (name) =>
    model.findOne({'name': name});

const deleteAuthor = (id) =>
    model.deleteOne({_id: id});

const updateAuthor = (id, user) =>
    model.updateOne({_id: id},
        {$set: user});

module.exports = {
    findAllAuthors, createAuthor, findAuthorByName, deleteAuthor, updateAuthor
};

