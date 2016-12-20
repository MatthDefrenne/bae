var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();
console.log(process.env.PWD );

app.use(express.static(process.env.PWD + '/client'));

app.get('*', function (req, res) {
    var file = process.env.PWD + "/client/index.html";
    res.sendFile(path.resolve(file));
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
