const dao = require('../db/user/user-dao')

module.exports = (app) => {
    const findAllUsers = (req, res) =>
        dao.findAllUsers()
            .then(users => res.json(users));
    const deleteUser = (req, res) =>
        dao.deleteUser(req.params.id)
            .then((status) => res.send(status));
    const createUser = (req, res) =>
        dao.createUser(req.body)
            .then((insertedUser) => res.json(insertedUser));
    const findUserByUsername = (req, res) =>
        dao.findUserByUsername(req.params.username)
            .then(user => res.json(user));
    const addToReadUser = (req, res) =>
        dao.addToReadUser(req.params.id, req.params.isbn)
            .then(status => res.send(status));
    const addReadUser = (req, res) =>
        dao.addReadUser(req.params.id, req.params.isbn)
            .then(status => res.send(status));
    const addCurrentlyReadingUser = (req, res) =>
        dao.addCurrentlyReadingUser(req.params.id, req.params.isbn)
            .then(status => res.send(status));
    const deleteToReadUser = (req, res) =>
        dao.deleteToReadUser(req.params.id, req.params.isbn)
            .then(status => res.send(status));
    const deleteReadUser = (req, res) =>
        dao.deleteReadUser(req.params.id, req.params.isbn)
            .then(status => res.send(status));
    const deleteCurrentlyReadingUser = (req, res) =>
        dao.deleteCurrentlyReadingUser(req.params.id, req.params.isbn)
            .then(status => res.send(status));
    const findUserByCredentials = (req, res) =>
        dao.findUserByCredentials(req.params.username, req.params.password)
            .then(status => res.send(status));
    const findUserById = (req, res) =>
        dao.findUserByCredentials(req.params.id)
            .then(status => res.send(status));

    const login = (req, res) => {
        const username = req.body.username
        const password = req.body.password
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        dao.findUserByUsername(username).then(user =>{
            if(user){
                if(password === user.password){
                    res.send({message:"Login success", user:user})
                }else{
                    res.send({message:"Invalid credentials"})
                }
            } else{
                res.send({message: "No account found for username"})
            }
        })
    }

    const register = (req, res) => {
        const username = req.body.username
        dao.findUserByUsername(username).then(user => {
            if(user) {
                console.log("registering user")
                res.send({message:"User already exists, try logging in"})
            }
            else {
                dao.createUser(req.body).then((insertedUser) => res.json(insertedUser))
            }
        })
    }

    const updateUser = (req, res) =>
        dao.updateUser(req.params.id, req.body)
            .then(status => res.send(status));


    app.post("/rest/users/register", register)
    app.post("/rest/users/login", login)
    app.get("/rest/users/:id", findUserById);
    app.get("/rest/users/credentials/:username/:password", findUserByCredentials)
    app.post("/rest/users/:id/current-read/remove/:isbn", deleteCurrentlyReadingUser);
    app.post("/rest/users/:id/read/remove/:isbn", deleteReadUser);
    app.post("/rest/users/:id/to-read/remove/:isbn", deleteToReadUser);
    app.post("/rest/users/:id/current-read/add/:isbn", addCurrentlyReadingUser);
    app.post("/rest/users/:id/read/add/:isbn", addReadUser);
    app.post("/rest/users/:id/to-read/add/:isbn", addToReadUser);
    app.post("/rest/users", createUser);
    app.delete("/rest/users/:id", deleteUser);
    app.get("/rest/users/username/:username", findUserByUsername);
    app.get("/rest/users", findAllUsers);
    app.post("/rest/users/:id", updateUser);
}

