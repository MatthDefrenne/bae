var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var md5 = require('md5');
var getIP = require('ipware')().get_ip;

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

app.use(require('prerender-node').set('prerenderToken', 'mwXTCGiIIIlSwxvPB2BP'));
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(compression());
app.use(express.static("client"));

app.get('*', index);
app.post('/invitation/', invitations);


function index(req, res) {
    var file = __dirname + "/client/index.html";
    res.sendFile(path.resolve(file));
}

function invitations(req, res) {

    var ipInfo = getIP(req);
    console.log(ipInfo);

    var invitation = {
        lastname: req.body.invitation.lastname,
        firstname: req.body.invitation.firstname,
        email: req.body.invitation.email,
        adress: req.body.invitation.adress,
        postal: req.body.invitation.postal,
        code: md5(req.body.invitation.email + req.body.invitation.firstname),
        ip: ipInfo.clientIp
    };


    connection.query('SELECT * FROM users WHERE email = ? AND ip = ?', [req.body.invitation.email, ipInfo.clientIp], function (error, results, fields) {
        if (results.length === 0) {
            connection.query('INSERT INTO users SET ?', invitation, function (error, results, fields) {
                if (error) throw error;
                res.status(200).end();
            });
        } else {
            res.status(500).end();
        }
    });
}

function start() {
    console.log('Our app is running on http://localhost:' + port);
}

app.listen(port, start);
