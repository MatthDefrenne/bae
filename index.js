var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');
var gzippo = require('gzippo');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();

app.use(gzippo.staticGzip(__dirname + "/public"));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
