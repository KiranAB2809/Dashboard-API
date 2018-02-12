var mangoose = require('mongoose');
mangoose.connect('mongodb://localhost:27017/ProjectDb');
mangoose.Promise = global.Promise;
var db = mangoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));