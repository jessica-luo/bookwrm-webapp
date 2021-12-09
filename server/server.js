const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cstrand:GUXy4N5nnWcmia4@book-info.c3jfh.mongodb.net/book-info?retryWrites=true&w=majority');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        data: {
            name: 'name of your app',
            version: '0.1.0'
        }
    });

});

require('./book/book-service')(app);
require('./user/user-service')(app);


app.listen(process.env.PORT || 4000);
