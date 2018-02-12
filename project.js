var mongoose = require('mongoose');
var ProjectSchema = new mongoose.Schema({
    id: Number,
    name: String,
    server: String,
    type: String
});
var Project = mongoose.model('project', ProjectSchema, 'Dashboard');
module.exports = Project;