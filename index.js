var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();
console.log(process.env.PWD );

app.use(express.static(__dirname  + "public"));

app.get('/tab', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/test', function (req, res) {
    res.sendFile("./index.html");
});



app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
