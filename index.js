var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'public', 'index.html');
    res.sendFile(index);
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
