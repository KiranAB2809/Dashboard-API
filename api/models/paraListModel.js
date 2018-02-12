'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    userId: {
        type:String
    },
    userName: {
        type: String
    },
    serverName: {
        type: String
    },
    server: {
        type: String
    },
    cpuUtilization: {
        type: Number
    },
    capacity: {
        type: Number
    },
    ram: {
        type: Number
    },
    support: {
        type: Number
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);