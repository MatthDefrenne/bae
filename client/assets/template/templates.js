angular.module('templates-main', ['/components/contact/contact.view.html', '/components/footer/footer.view.html', '/components/home/home.view.html', '/components/invitations/invitations.view.html', '/components/order/order.view.html']);

angular.module("/components/contact/contact.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/components/contact/contact.view.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top navbar-red\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <div class=\"container\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a href=\"/\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Retour</a></li>\n" +
    "                    <li><a class=\"header-link\">BAEDRINKS - CONTACT</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div><!--/.container-fluid -->\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"background-contact\">\n" +
    "    <div class=\"container\" style=\"margin-top: 50px; padding-top: 50px\">\n" +
    "        <h1>Contactez-nous</h1>\n" +
    "        <p>Vous avez une question ou vous souhaitez nous signaler quelque chose? Nous sommes là pour vous aider ...</p>\n" +
    "        <hr>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" method=\"post\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"name\" class=\"col-sm-2 control-label\">Nom & Prénom</label>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\"  name=\"name\" ng-model=\"contact.firstname\" placeholder=\"Prénom\" value=\"\" required>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\"  name=\"name\" ng-model=\"contact.lastname\" placeholder=\"Nom\" value=\"\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" ng-model=\"contact.email\" placeholder=\"example@domain.com\" value=\"\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"message\" class=\"col-sm-2 control-label\">Message</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <textarea class=\"form-control\" rows=\"4\" name=\"message\" ng-model=\"contact.message\" required></textarea>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-10 col-sm-offset-2\">\n" +
    "                    <li ng-if=\"success\" class=\"alert alert-success\">Votre message a été envoyé avec succès, merci !</li>\n" +
    "                    <input id=\"submit\" name=\"submit\" type=\"submit\" value=\"Envoyer\" ng-click=\"sendMessage(contact)\" ng-disabled=\"!contact.message || !contact.email\" class=\"btn btn-primary\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<main-footer></main-footer>");
}]);

angular.module("/components/footer/footer.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/components/footer/footer.view.html",
    "<footer>\n" +
    "    <div class=\"footer navbar-fixed-bottom\">\n" +
    "        <div class=\"container\" style=\"padding-top: 20px\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-12\">\n" +
    "                    <div style=\"\n" +
    "    margin: auto;\">\n" +
    "                        <div class=\"social-media \">\n" +
    "                            <a href=\"https://www.facebook.com/BaeDrinks/?fref=ts\">\n" +
    "                                <div class=\"table-icon\">\n" +
    "                                    <i class=\"fa fa-facebook facebook\"\n" +
    "                                       aria-hidden=\"true\"></i>\n" +
    "                                </div>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"social-media\">\n" +
    "                            <a href=\"https://medium.com/@baedrinks\">\n" +
    "                                <div class=\"table-icon\">\n" +
    "                                    <i class=\"fa fa-medium medium\"\n" +
    "                                       aria-hidden=\"true\"></i>\n" +
    "                                </div>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"social-media \">\n" +
    "                            <a href=\"https://www.instagram.com/baedrinks/\">\n" +
    "        <span class=\"table-icon\">\n" +
    "               <i class=\"fa fa-instagram instagram\" aria-hidden=\"true\"></i>\n" +
    "\n" +
    "        </span>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"text-center\" style=\"font-weight: bold; margin-top: 50px\">\n" +
    "            <p>  BAE DRINKS © 2017 All Rights Reserved. </p>\n" +
    "            <p><b>B</b>efore <b>A</b>nyone <b>E</b>lse</span></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>\n" +
    "");
}]);

angular.module("/components/home/home.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/components/home/home.view.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\" id=\"nav\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n" +
    "                    aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\" ng-click=\"GOTOTOP()\"><img src=\"./img/logo2.png\" style=\"    width: 130px;\n" +
    "    position: relative;\n" +
    "    top: -21px;\"></a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav navbar-left\">\n" +
    "                <li><a data-scroll class=\"btn-green-hover\" title=\"WHAT IS BAE ?\" ng-click=\"GOTOWHAT()\">C’EST QUOI BAE\n" +
    "                    ? </a></li>\n" +
    "                <li><a data-scrol class=\"btn-blue-hover\" title=\"OUR BAE DRINKS\" ng-click=\"GOTOPRODUCT()\">NOS\n" +
    "                    BOISSONS</a></li>\n" +
    "                <li><a data-scroll class=\"btn-orange-hover\" title=\"ORDER BAE\" ng-click=\"GOTOBUY()\">COMMANDER</a></li>\n" +
    "                <li><a data-scroll title=\"Contact us\" href=\"/contact/\">CONTACTEZ-NOUS</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"jumbotron header\">\n" +
    "    <div class=\"container container-header\">\n" +
    "        <img alt=\"baedrink - improve your self naturaly\" class=\"img-responsive\" src=\"./img/logo.png\">\n" +
    "        <div style=\"margin-top: 40px\">\n" +
    "            <button class=\"btn btn-empty btn-green-hover btn-lg\" href=\"WHATBAE\" title=\"WHAT IS BAE ?\"\n" +
    "                    ng-click=\"GOTOWHAT()\">NOTRE CULTURE\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-blue-hover btn-lg\" href=\"PRODUCT\" title=\"OUR BAE DRINKS\"\n" +
    "                    ng-click=\"GOTOPRODUCT()\">NOS BOISSONS\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-orange-hover btn-lg\" href=\"BUY\" title=\"ORDER BAE\" ng-click=\"GOTOBUY()\">\n" +
    "                COMMANDER\n" +
    "            </button>\n" +
    "            <a class=\"btn btn-empty btn-red-hover btn-lg\" href=\"/contact/\" title=\"CONTACT\">CONTACTEZ-NOUS\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div style=\"\n" +
    "    margin: auto; margin-top: 75px; margin-bottom: 50px\">\n" +
    "            <div class=\"social-media \">\n" +
    "                <a title=\"Facebook\" href=\"https://www.facebook.com/BaeDrinks/?fref=ts\">\n" +
    "                    <div class=\"table-icon\">\n" +
    "                        <i class=\"fa fa-facebook facebook\"\n" +
    "                           aria-hidden=\"true\"></i>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"social-media\">\n" +
    "                <a title=\"Medium\" href=\"https://medium.com/@baedrinks\">\n" +
    "                    <div class=\"table-icon\">\n" +
    "                        <i class=\"fa fa-medium medium\"\n" +
    "                           aria-hidden=\"true\"></i>\n" +
    "                    </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"social-media \">\n" +
    "                <a title=\"Instagram\" href=\"https://www.instagram.com/baedrinks/\">\n" +
    "        <span class=\"table-icon\">\n" +
    "                <i class=\"fa fa-instagram instagram\" aria-hidden=\"true\"></i>\n" +
    "        </span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-1\" id=\"WHATBAE\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle\">\n" +
    "        <div class=\"container\"  >\n" +
    "            <img src=\"./img/what.png\" style=\"margin-top: 50px; margin-bottom: 5%\"  class=\"img-responsive\" >\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-8\" style=\"font-size: 25px; margin-top: 25px\">\n" +
    "                    <p>La nature nous a toujours enseigné comment rester en bonne santé. A chaque fois que nous dévions\n" +
    "                        du processus naturel, la qualité de notre bien-être diminue.</p>\n" +
    "                    <p style=\"margin-bottom: 50px\">Chez Bae, nous analysons minutieusement comment les choses se passent naturellement, ensuite nous\n" +
    "                        concevons des boissons naturelles BaeDrinks inspirées de nos analyses pour aider les gens à\n" +
    "                        améliorer la qualité de leur bien-être.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-3\" id=\"PRODUCT\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle\">\n" +
    "        <div class=\"container\" style=\"margin-top: 50px; margin-bottom: 50px\">\n" +
    "            <img src=\"./img/drinks.png\" style=\"margin-bottom: 50px\" class=\"img-responsive\">\n" +
    "            <p class=\"b-s25\">Notre premiere BaeDrink aidera les gens à résoudre l’un des fréquents problèmes nuisant au bien-être. Nous avons analysé comment les choses se font naturellement; et aujourd’hui, nous avons LA solution !\n" +
    "            </p>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-3\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-6\">\n" +
    "                    <button ng-click=\"GOTOBUY()\" class=\"btn btn-warning full-width btn-designed\">RESTEZ INFORMEZ</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-3\" id=\"PRODUCT\" ng-if=\"false\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle; \">\n" +
    "        <div class=\"container\" >\n" +
    "            <div class=\"row\" style=\"margin-top: 25px\">\n" +
    "                <div class=\"fs20 cursor\" style=\"margin-bottom: 20px\" ng-click=\"closeProduct()\" ng-if=\"false\">\n" +
    "                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n" +
    "                    Retour aux produits\n" +
    "                </div>\n" +
    "                <div class=\"col-md-7 col-md-push-5\">\n" +
    "                    <p class=\"lead\">\n" +
    "                        Problème d’insomnie ou nuit blanche? Vous voulez tout simplement vous détendre et vous relaxer?\n" +
    "                        Chez Bae nous avons pensé à vous!\n" +
    "                        Nous avons analysé en détail comment votre corps et cerveau fonctionne pour que vous entrez dans\n" +
    "                        le sommeil et la détente.\n" +
    "                    </p>\n" +
    "                    <p class=\"lead\">\n" +
    "                        Nous avons concu BaeSleep inspirée de cette analyse, avec un goût pêche délicieux pour vous\n" +
    "                        aider à vous détendre, vous relaxer et améliorer votre qualité de sommeil.\n" +
    "                        qualité de sommeil.</p>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-lg-6\">\n" +
    "                            <img class=\"img-circle\"\n" +
    "                                 src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\"\n" +
    "                                 alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <p>Melatonine</p>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                        <div class=\"col-lg-6\">\n" +
    "                            <img class=\"img-circle\"\n" +
    "                                 src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\"\n" +
    "                                 alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <p>Flavor</p>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                    </div><!-- /.row -->\n" +
    "                </div>\n" +
    "                <div class=\"col-md-5 col-md-pull-7\">\n" +
    "                    <div class=\"bae-sleep\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div n ng-if>\n" +
    "<div class=\"container-global-4\" id=\"BUY\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle\">\n" +
    "        <div class=\"container\">\n" +
    "            <img src=\"./img/order.png\" style=\"margin-bottom: 50px\" class=\"img-responsive\">\n" +
    "            <p class=\"b-s25\">Vous désirez acheter une de nos BaeDrinks ? Pour l’instant les commandes ne sont pas encore\n" +
    "                ouvertes !\n" +
    "                Restez Informés de l’ouverture des commandes et de nos nouveautés en saisissant votre mail et en nous\n" +
    "                suivant sur nos réseaux sociaux</p>\n" +
    "            <div ng-if=\"success\">\n" +
    "                <div class=\"alert alert-success\">\n" +
    "                    Merci pour votre participation, nous revenons vers vous très prochainement ! <i class=\"fa fa-check\"\n" +
    "                                                                                                    aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\" style=\"margin-top: 20px\" ng-if=\"!success\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <input type=\"email\" ng-model=\"email\" placeholder=\"example@domain.com\" class=\"form-control\" required>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <button class=\"btn btn-success btn-designed\" ng-click=\"sendMail(email)\" type=\"submit\"^>\n" +
    "                        Envoyer mon adresse mail\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<main-footer></main-footer>");
}]);

angular.module("/components/invitations/invitations.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/components/invitations/invitations.view.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top navbar-orange\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <div class=\"container\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a href=\"/\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Retour</a></li>\n" +
    "                    <li><a class=\"header-link\">BAEDRINKS - RECEVOIR UNE INVITATION</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div><!--/.container-fluid -->\n" +
    "</nav>\n" +
    "<div class=\"background\">\n" +
    "    <div class=\"container \" style=\"margin-top: 50px; padding-top: 50px\">\n" +
    "        <h1>Recevoir mon iventation</h1>\n" +
    "        <h4>Dépêche toi, il ne reste plus que <b>{{totalInvitation}}</b> invitations disponible !</h4>\n" +
    "        <hr>\n" +
    "        <li ng-if=\"error\" style=\"color: red\">Cette adresse email est déjà utilisée !</li>\n" +
    "        <li ng-if=\"errorslabel\" style=\"color: red\">Tous les champs doivent être remplis !</li>\n" +
    "        <div class=\"alert alert-success\">\n" +
    "                Félécitation, vous avez validez votre invitation pour recevoir une des 100 bae sleep disponible. Une confirmation à été envoyé par mail ! Merci et à bientôt :)\n" +
    "        </div>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" method=\"post\" style=\"margin-top: 50px\" ng-if=\"!sucess\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\" class=\"col-sm-2 control-label\">Email : </label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" ng-model=\"invitation.email\" id=\"email\" placeholder=\"example@domain.com\"  required >\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2 control-label\">Votre image de participation : </label>\n" +
    "                <div class=\"col-sm-3\" >\n" +
    "\n" +
    "                    <div ng-if=\"inProgressUploadImage\"><i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\"></i>\n" +
    "                    </div>\n" +
    "                    <div  style=\"    color: #33ff4e;\n" +
    "             padding: 10px;\" ng-if=\"imageURL\">\n" +
    "                        Votre image a bien été ajoutée. <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "                    </div>\n" +
    "                    <a class=\"btn btn-primary\" ng-click=\"openTakePhoto()\" ng-if=\"!imageURL && !inProgressUploadImage\">\n" +
    "                        Cliquez ici pour télécharger votre image</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2 control-label\">Nom & Prénom : </label>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"invitation.firstname\" placeholder=\"Prénom\" required>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\"  ng-model=\"invitation.lastname\"  placeholder=\"Nom\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2 control-label\">Livraison : </label>\n" +
    "                <div class=\"col-sm-5\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"invitation.adress\"  name=\"name\" placeholder=\"Adresse\" required>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\"  name=\"name\" ng-model=\"invitation.postal\" placeholder=\"code postal\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-10 col-sm-offset-2\">\n" +
    "                    <input id=\"submit\" name=\"submit\" type=\"submit\" value=\"Envoyer\" class=\"btn btn-warning\" ng-if=\"!inProgress\" ng-click=\"sendInvitation(invitation)\">\n" +
    "                    <a  type=\"submit\"  class=\"btn btn-warning\" ng-if=\"inProgress\"><i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<main-footer></main-footer>");
}]);

angular.module("/components/order/order.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/components/order/order.view.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top navbar-blue\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n" +
    "                    aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <div class=\"container\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <li><a href=\"/\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Retour</a></li>\n" +
    "                    <li><a class=\"header-link\">BAEDRINKS - RECEVOIR UNE BOISSON</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "<div class=\"background\">\n" +
    "    <div class=\"container \" style=\"margin-top: 50px; padding-top: 50px\">\n" +
    "        <h1>Commande BAESLEEP</h1>\n" +
    "        <hr>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" method=\"post\" style=\"margin-top: 50px\" ng-if=\"!sucess\">\n" +
    "            <li ng-if=\"error\" style=\"color: red\">Ce code n'existe pas !</li>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\" class=\"col-sm-2 control-label\">Code de participation :</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"order.code\" ng-change=\"newOrder()\"\n" +
    "                           placeholder=\"Code d'invitation bae\" required ng-if=\"!success\">\n" +
    "                    <div class=\"alert alert-success\" ng-if=\"success\">\n" +
    "                        {{order.code}} - code validé ! <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\" class=\"col-sm-2 control-label\">Email : </label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" ng-model=\"order.email\" id=\"email\"\n" +
    "                           placeholder=\"example@domain.com\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2 control-label\">Nom & Prénom : </label>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"order.firstname\" placeholder=\"Prénom\" required>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"order.lastname\" placeholder=\"Nom\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2 control-label\">Livraison : </label>\n" +
    "                <div class=\"col-sm-5\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"order.adress\" name=\"name\" placeholder=\"Adresse\"\n" +
    "                           required>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\" name=\"name\" ng-model=\"order.postal\"\n" +
    "                           placeholder=\"code postal\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-10 col-sm-offset-2\">\n" +
    "                    <li style=\"margin-bottom: 20px; color: #78a9ff; font-size: 18px; border: 1px solid #78a9ff; padding: 10px\">\n" +
    "                        <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> Avant de valider votre commande\n" +
    "                        soyez sur de votre adresse de livraison. Les commandes sont effectuées gratuitement à Namur,\n" +
    "                        Belgique, directement envoyer via la poste.\n" +
    "                    </li>\n" +
    "\n" +
    "                    <input id=\"submit\" name=\"submit\" type=\"submit\" value=\"Commander\" class=\"btn btn-primary btn-lg\"\n" +
    "                           ng-if=\"!inProgress\" ng-click=\"sendOrder(order)\">\n" +
    "                    <a type=\"submit\" class=\"btn btn-warning\" ng-if=\"inProgress\"><i\n" +
    "                            class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<main-footer></main-footer>\n" +
    "");
}]);
