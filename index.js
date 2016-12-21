var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')



var port = process.env.PORT || 8080;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("client"));

app.get('*', function (req, res) {
    var file = __dirname + "/client/index.html";
    res.sendFile(path.resolve(file));
});

app.post('/new-order/', function(req, res) {
    var order = req.body.order;

    var mailOrder = createMailForOrder(order);
    var mailToCostumers = createMailToCostumers(order)

    transporter.sendMail(mailOrder, function(error, info){
        if(error){
            res.json(400);
            return console.log(error);
        }
        transporter.sendMail(mailToCostumers, function(error, info){
            if(error){
                res.json(400);
                return console.log(error);
            }
            res.json(200);
        });
    });
});

//*////////////////////

var transporter = nodemailer.createTransport('smtps://drinkybelgium@gmail.com:Killer123@smtp.gmail.com');



function createMailToCostumers(order) {
    return {
        from: 'Drinky <drinkybelgium@gmail.com>', // sender address
        to: order.mail, // list of receivers
        subject: 'Drinky', // Subject line
        text: 'Votre commande Drinky', // plaintext body
        html: '<div style="background: rgba(236, 236, 236, 0.51);padding: 50px;text-align: center; font-size: 25px"><h1 style="text-align: center;">👍 Merci pour votre achat ! </h1>' +
        'Bonjour Matthieu, nous te remercions pour ta demande d\'achat  de <b> ' + order.quantity  + ' </b> boisson(s) Drinky ! ' +
        'Nous passons chez toi dans les 24h, si as des question, nous y répondons avec grand plaisir sur notre page facebook :  ' +
        '<a href="https://www.facebook.com/Drinky-308767716189772/">Page facebook Drinky</a></div>'
    }
}

function createMailForOrder(order) {
    return {
        from: 'Drinky <drinkybelgium@gmail.com>', // sender address
        to: 'drinkybelgium@gmail.com', // list of receivers
        subject: 'Commande', // Subject line
        text: 'Commande', // plaintext body
        html: '<div>' +
        '<h1>Achat  : </h1> + ' + 'Parainnage' + order.sponsorship + order.firstname +  ' Nom : ' +  order.name  + ' | Adresse de livraison ' + order.adress + ' | Code Postal ' +  order.codepostal + ' | Date d\'achat ' + new Date() +  ' | Quantité ' + order.quantity  +  ' | EMAIL :  ' + order.mail +
        '</div>' // html body
    }
}




app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
