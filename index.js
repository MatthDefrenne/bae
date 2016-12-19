var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

app.use(helmet());

app.use(express.static(path.join(__dirname, 'Locality'), {maxAge: 86400000}));

app.get('*', function (req, res) {
    var file = __dirname + "/Locality/index.html";
    res.sendFile(path.resolve(file));
});

app.listen(3000);
console.log('Express Server started on port 3000');