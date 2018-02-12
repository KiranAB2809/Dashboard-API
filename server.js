var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
var db = require('./db');

var UserController = require('./api/controllers/paraListController');
app.use('/', UserController);

app.get('/',function(req,res){
    res.send('Welcome To Dashboard API');
})

app.listen(port, function(){
    console.log('Welcome To Node JS API and running on PORT:' + port);
});



//One More way of doing
//Create app.js
//var express = require('express');
//var app = express();
//module.exports = app;

//Import app.js in Server.js
//app=require('./app.js);