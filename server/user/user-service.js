const dao = require('./user-dao')

module.exports = (app) => {
    const findAllUsers = (req, res) =>
        dao.findAllUsers()
            .then(users => res.json(users));

    app.get("/rest/users", findAllUsers);
}

