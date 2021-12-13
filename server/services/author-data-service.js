const dao = require('../db/author_data/author-dao')

module.exports = (app) => {
    const findAllAuthors = (req, res) =>
        dao.findAllAuthors()
            .then(users => res.json(users));
    const deleteAuthor = (req, res) =>
        dao.deleteAuthor(req.params.id)
            .then((status) => res.send(status));
    const createAuthor = (req, res) =>
        dao.createAuthor(req.body)
            .then((insertedUser) => res.json(insertedUser));
    const findAuthorByName = (req, res) =>
        dao.findAuthorByName(req.params.username)
            .then(user => res.json(user));

    app.post("/rest/author-data", createAuthor);
    app.delete("/rest/author-data/:id", deleteAuthor);
    app.get("/rest/author-data/:username", findAuthorByName);
    app.get("/rest/author-data", findAllAuthors);
}

