const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const config = require('./config');
const session = require('express-session');
const sessionStore = require('./lib/sessionStore');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let wordsRouter = require('./routes/words');

let app = express();

app.use(favicon(path.join(__dirname, './client/public/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(session({
    secret: config.get('session:secret'),
    resave: true,
    saveUninitialized: false,
    key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    store: sessionStore
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/words', wordsRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = app;
