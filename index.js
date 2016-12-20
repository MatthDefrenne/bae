var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 8080;


app.use(helmet());

app.use(express.static("client"));

app.get('*', function (req, res) {
    var file = __dirname + "/clieent/index.html";
    res.sendFile(path.resolve(file));
});



app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
