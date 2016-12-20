var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();
console.log(process.env.PWD );

app.use(express.static(path.join(__dirname, 'public')));

app.get('/tab', function (req, res) {
    res.sendfile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/test', function (req, res) {
    res.sendFile("public/index.html");
});



app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
