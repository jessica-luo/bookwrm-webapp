const dao = require('../db/author/author-dao')

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
    const findAuthorByUsername = (req, res) =>
        dao.findAuthorByUsername(req.params.username)
            .then(user => res.json(user));
    const updateAuthor = (req, res) =>
        dao.updateAuthor(req.params.id, req.body)
            .then(status => res.send(status));

    const login = (req, res) => {
        const username = req.body.username
        const password = req.body.password
        dao.findAuthorByUsername(username).then(user =>{
            if(user){
                if(password === user.password){
                    res.send({message:"Login success",user:user})
                }else{
                    res.send({message:"Invalid credentials"})
                }
            } else{
                res.send("No account found for username")
            }
        })
    }

    const register = (req, res) => {
        const {username} = req.body.username
        dao.findAuthorByUsername(username).then(user => {
            if(user) {
                res.send({message:"User already exists, try logging in"})
            }
            else {
                dao.createAuthor(req.body).then((insertedUser) => res.json(insertedUser))
            }
        })
    }

    app.post("rest/authors/:id", updateAuthor)
    app.post("/rest/authors/register", register)
    app.post("/rest/authors/login", login)
    app.post("/rest/authors", createAuthor);
    app.delete("/rest/authors/:id", deleteAuthor);
    app.get("/rest/authors/:username", findAuthorByUsername);
    app.get("/rest/authors", findAllAuthors);
}

