const mongoose = require('./mongooseConnect');
const config = require('../config');
const session = require('express-session');

const MongoStore = require('connect-mongo')(session);

const sessionStore = new MongoStore({mongooseConnection: mongoose.connection});
// const sessionStore = new MongoStore(config.get('mongoose:uri'));

module.exports = sessionStore;