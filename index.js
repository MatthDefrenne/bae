var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;
process.env.PWD = process.cwd();
console.log(process.env.PWD );

app.use(express.static(path.join(__dirname, 'public'), {maxAge: 86400000}));

app.get('*', function (req, res) {
    const index = path.join(process.env.PWD, 'public', 'index.html');
    const index2 = path.join('public', 'index.html');
    res.sendFile(index);
    res.sendFile(index2);
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
