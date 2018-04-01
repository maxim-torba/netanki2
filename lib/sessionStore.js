const mongoose = require('./mongooseConnect');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const sessionStore = new MongoStore({mongooseConnection: mongoose.connection});

module.exports = sessionStore;