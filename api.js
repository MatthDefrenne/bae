var Mailjet = require('node-mailjet').connect('36a3d81be137f529167c7d0231fce037', '192a40d8e4f50aef301882e97a531413');
var md5 = require('md5');

module.exports = function (connection) {

    return {
        invitations: invitations,
        getTotalSubscribe: getTotalSubscribe
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
                    sendMail([{"email": req.body.invitation.email}], "BaeDrinks", "matthieu.defrenne@outlook.fr", "Matthieu Defrenne", invitation);
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

    function sendMail(arrayToSend, subject, from, fromName, info) {
        var request = Mailjet
            .post("send")
            .request({
                "FromEmail": from,
                "FromName": fromName,
                "Subject": subject,
                "Html-part": "<h3>Bonjour " + info.firstname + ", bienvenue chez BaeDrinks!</h3> Voici votre code de participation : <br/><div style='border: 1px solid black;padding: 10px;width: 350px;text-align: center; margin-top: 10px'> <b>" + info.code + "</b></div> " +
                "<h4>gardez le bien jusqu'au jour de l'ouverture des commandes pour gagner une boisson gratuite ! " +
                "N'oubliez pas de nous rejoindre sur les réseaux sociaux pour être tenu au courrant de ce qu'il se passe. Merci et à bientôt :)</h4> ",
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


};