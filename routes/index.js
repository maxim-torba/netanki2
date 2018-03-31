const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    res.end('hi');
    /*if (req.session.user) {
        res.render('index');
    } else {
        res.render('login');
    }*/
});

module.exports = app;