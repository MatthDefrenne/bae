var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var md5 = require('md5');

var connection = mysql.createConnection({
    host: '137.74.164.253',
    user: 'root',
    password: 'dcx299JV',
    database: 'baedrinks'
});

var port = process.env.PORT || 8080;

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});


var api = require('./api')(connection);

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(compression());
app.use(express.static("client"));

app.post('/api/invitation/', api.invitations);
app.get('/api/total-invitation/', api.getTotalSubscribe);
app.get('*', index);


function index(req, res) {
    var file = __dirname + "/client/index.html";
    res.sendFile(path.resolve(file));
}

function start() {
    console.log('Our app is running on http://localhost:' + port);
}

app.listen(port, start);
