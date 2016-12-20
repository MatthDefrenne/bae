var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();
console.log(process.env.PWD );

app.use(express.static(path.join(process.cwd(), '../../speaky-client/'), {maxAge: 86400000}));

app.get('*', function (req, res) {
    var file = path.join('./drinky', '/public/', 'index.html');
    return res.sendfile(path.resolve(file));
});


app.listen(port, '137.74.164.253', function() {
    console.log('Our app is running on http://localhost:' + port);
});
