const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tasks = require('./tasks.model.js')(mongoose);
db.boards = require('./boards.model.js')(mongoose);

module.exports = db;
