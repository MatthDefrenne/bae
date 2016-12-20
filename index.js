var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();
console.log(process.env.PWD );

app.use(express.static("public"));

app.get('*', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
