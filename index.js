var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();
console.log(process.env.PWD );

app.use('/public', express.static(__dirname + '/../public'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/test', function (req, res) {
    res.sendFile("public/index.html");
});



app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
