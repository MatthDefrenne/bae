var Mailjet = require('node-mailjet').connect('36a3d81be137f529167c7d0231fce037', '192a40d8e4f50aef301882e97a531413');
var md5 = require('md5');

module.exports = function (connection) {

    return {
        invitations: invitations,
        getTotalSubscribe: getTotalSubscribe,
        getUserWithCode: getUserWithCode,
        newOrder: newOrder,
        saveEmail: saveEmail
    };

    function invitations(req, res) {

        var invitation = {
            lastname: req.body.invitation.lastname,
            firstname: req.body.invitation.firstname,
            email: req.body.invitation.email,
            adress: req.body.invitation.adress,
            postal: req.body.invitation.postal,
            code: md5(req.body.invitation.email + req.body.invitation.lastname),
            imageURL: req.body.invitation.imageURL
        };


        connection.query('SELECT * FROM users WHERE email = ?', [req.body.invitation.email], function (error, results, fields) {
            if (results.length === 0) {
                connection.query('INSERT INTO users SET ?', invitation, function (error, results, fields) {
                    sendMailToCostumers(invitation);
                    sendMailToBaeDrinks(invitation);
                    if (error) throw error;
                    res.status(200).end();
                });
            } else {
                res.status(500).end();
            }
        });
    }


    function getTotalSubscribe(req, res) {
        connection.query('SELECT COUNT(*) AS total FROM users', function (error, results, fields) {
            if (error) throw error;
            res.json(results[0].total).status(200).end();
        });
    }

    function sendMail(arrayToSend, subject, from, fromName, msg) {
        var request = Mailjet
            .post("send")
            .request({
                "FromEmail": from,
                "FromName": fromName,
                "Subject": subject,
                "Html-part": msg,
                "Recipients": arrayToSend
            })

        request
            .then(function (result) {
                console.log(result.body)
            })
            .catch(function (err) {
                console.log(err.statusCode)
            })
    }

    function sendMailToCostumers(invitation) {
        sendMail([{"email": invitation.email}], "Confirmation d'invitation", "matthieu.defrenne@outlook.fr", "BaeDrinks",
            "<h3>Bonjour " + invitation.firstname + ", bienvenue chez BaeDrinks!</h3> Retrouvez ci-dessous votre code avec le lien de participation pour gagner une boisson gratuite bae sleep, gardez le bien ! " +
            "<div style='border: 1px solid black;padding: 10px;width: 350px;text-align: center; margin-top: 10px;'> <b><a href='https://www.baedrinks.com/order/#' " +  invitation.code + "></a></b></div> ");
    }

    function sendMailToBaeDrinks(invitation) {
        sendMail([{"email": "matthieu.defrenne@gmail.com"}], "COMMANDE", "matthieu.defrenne@outlook.fr", "BaeDrinks" + invitation.firstname, "" +
            invitation.firstname + "<br/>" +
            invitation.lastname + "<br/>" +
            invitation.adress + "<br/>" +
            invitation.postal + "<br/>" +
            invitation.code + "<br/>" +
            invitation.email + "<br/>"
        );
    }

    function getUserWithCode(req, res) {
        var code = req.param('code');
        connection.query('SELECT * FROM users WHERE code = ?', [code], function (error, results, fields) {
            if (results.length != 0) {
                res.json(results[0]).status(200).end();
            } else {
                res.status(500).end();
            }
        });
    }

    function newOrder(req, res) {
        var order = req.body.order;
        updateCode(order.email);
        res.status(200).end();
    }

    function updateCode(email) {
        connection.query('UPDATE users SET code = ? WHERE email = ?', ['', email], function (error, results, fields) {
            if (error) throw error;
        });
    }

    function saveEmail(req, res) {
        connection.query('INSERT INTO email SET ?', [req.body], function (error, results, fields) {
            if (error) throw error;
            res.status(200).end();
        });
    }

};