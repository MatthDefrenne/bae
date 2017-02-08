angular.module('templates-main', ['/components/contact/contact.view.html', '/components/home/home.view.html', '/components/invitations/invitations.view.html', '/components/order/order.view.html']);

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
    "                    <input type=\"text\" class=\"form-control\"  name=\"name\" placeholder=\"Prénom\" value=\"\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\"  name=\"name\" placeholder=\"Nom\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"example@domain.com\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"message\" class=\"col-sm-2 control-label\">Message</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <textarea class=\"form-control\" rows=\"4\" name=\"message\"></textarea>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-10 col-sm-offset-2\">\n" +
    "                    <input id=\"submit\" name=\"submit\" type=\"submit\" value=\"Envoyer\" class=\"btn btn-primary\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<footer>\n" +
    "    <div class=\"footer navbar-fixed-bottom\">\n" +
    "        <div class=\"container\" style=\"padding-top: 20px\">\n" +
    "\n" +
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
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"text-center\" style=\"font-weight: bold; margin-top: 50px\">\n" +
    "            <p>  BAE DRINKS © 2017 All Rights Reserved. </p>\n" +
    "            <p><b>B</b>efore <b>A</b>nyone <b>E</b>lse</span></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
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
    "            <a class=\"navbar-brand\" href=\"#\" ng-click=\"GOTOTOP()\"><b>BAEDRINKS</b></a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n" +
    "            <ul class=\"nav navbar-nav navbar-left\">\n" +
    "                <li><a data-scroll class=\"btn-green-hover\" title=\"WHAT IS BAE ?\" ng-click=\"GOTOWHAT()\">C’EST QUOI BAE ? </a></li>\n" +
    "                <li><a data-scrol class=\"btn-blue-hover\" title=\"OUR BAE DRINKS\" ng-click=\"GOTOPRODUCT()\">NOS BOISSONS</a></li>\n" +
    "                <li><a data-scroll class=\"btn-orange-hover\" title=\"ORDER BAE\" ng-click=\"GOTOBUY()\">COMMANDER</a></li>\n" +
    "                <li><a data-scroll title=\"Contact us\" href=\"/contact/\">CONTACTEZ-NOUS</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"jumbotron header\">\n" +
    "    <div class=\"container container-header\">\n" +
    "            <img alt=\"baedrink - improve your self naturaly\" style=\"width: 80%\" src=\"./img/logo.png\">\n" +
    "        <div style=\"margin-top: 40px\">\n" +
    "            <button class=\"btn btn-empty btn-green-hover btn-lg\" href=\"WHATBAE\" title=\"WHAT IS BAE ?\" ng-click=\"GOTOWHAT()\">C’EST QUOI BAE ?\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-blue-hover btn-lg\" href=\"PRODUCT\" title=\"OUR BAE DRINKS\" ng-click=\"GOTOPRODUCT()\">NOS BOISSONS\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-orange-hover btn-lg\" href=\"BUY\" title=\"ORDER BAE\" ng-click=\"GOTOBUY()\">COMMANDER\n" +
    "            </button>\n" +
    "            <a class=\"btn btn-empty btn-red-hover btn-lg\" href=\"/contact/\" title=\"CONTACT\">CONTACTEZ-NOUS\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div style=\"\n" +
    "    margin: auto; margin-top: 75px; margin-bottom: 50px\">\n" +
    "            <div class=\"social-media \">\n" +
    "                <a title=\"Facebook\" href=\"https://www.facebook.com/BaeDrinks/?fref=ts\">\n" +
    "                <div class=\"table-icon\">\n" +
    "                    <i class=\"fa fa-facebook facebook\"\n" +
    "                                                                                  aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"social-media\">\n" +
    "                <a title=\"Medium\" href=\"https://medium.com/@baedrinks\">\n" +
    "                <div class=\"table-icon\">\n" +
    "                     <i class=\"fa fa-medium medium\"\n" +
    "                                                                aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"social-media \">\n" +
    "                <a title=\"Instagram\" href=\"https://www.instagram.com/baedrinks/\">\n" +
    "        <span class=\"table-icon\">\n" +
    "                <i class=\"fa fa-instagram instagram\" aria-hidden=\"true\"></i>\n" +
    "\n" +
    "        </span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-global-1\" id=\"WHATBAE\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle\">\n" +
    "        <div class=\"container\" style=\"margin-bottom: 40px; \">\n" +
    "            <h1 class=\"h1-custom\">C’EST QUOI BAE ?</h1>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-8\" style=\"font-size: 25px; margin-top: 25px\">\n" +
    "                    <p>La nature nous a toujours enseigné comment rester en bonne santé. A chaque fois que nous dévions du processus naturel,\n" +
    "                        la qualité de notre bien-être diminue. </p>\n" +
    "\n" +
    "                        Chez Bae, nous analysons comment les choses se passent naturellement\n" +
    "                        dans la nature, ensuite nous concevons des boissons naturelles BaeDrinks, et ainsi aider les gens à améliorer les différents aspects de leur bien-être.</>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-3\" id=\"PRODUCT\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle; \">\n" +
    "        <div class=\"container\" style=\"margin-bottom: 40px; padding-top: 20px;\">\n" +
    "            <h1 class=\"h1-custom\" ng-if=\"!hasClickedOnProduct\">\n" +
    "                BaeSleep\n" +
    "            </h1>\n" +
    "            <div class=\"row\" style=\"margin-top: 25px\" >\n" +
    "                <div class=\"fs20 cursor\" style=\"margin-bottom: 20px\" ng-click=\"closeProduct()\" ng-if=\"false\">\n" +
    "                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n" +
    "                    Retour aux produits\n" +
    "                </div>\n" +
    "                <div class=\"col-md-7 col-md-push-5\">\n" +
    "                    <p class=\"lead\">\n" +
    "                       Problème d'insomnie ou nuit blanche ? Ou vous voulez tout simplement vous détendre et de vous relaxez?\n" +
    "                        Chez Bae nous avons pensé à vous, nous avons analysé minutieusement comment votre corps et cerveau\n" +
    "                        fonctionne pour que vous entrez dans le sommeil et la détente.\n" +
    "                        </p>\n" +
    "\n" +
    "                        <p class=\"lead\">Nous avons ensuite conçu BaeSleep basée sur\n" +
    "                        le même principe avec un goût pêche délicieux pour vous aider à vous détendre, vous relaxer et améliorer votre\n" +
    "                        qualité de sommeil.</p>\n" +
    "                        <div class=\"row\">\n" +
    "                        <div class=\"col-lg-6\">\n" +
    "                            <img class=\"img-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <p>Melatonine</p>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                        <div class=\"col-lg-6\">\n" +
    "                            <img class=\"img-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <p>Flavor</p>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                            <button class=\"btn btn-danger full-width fs20\" ng-click=\"GOTOBUY()\">Acheter une boissons BAE SLEEP</button>\n" +
    "\n" +
    "                        </div><!-- /.row -->\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-md-5 col-md-pull-7\">\n" +
    "                    <div class=\"bae-sleep\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-4\" id=\"BUY\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1 class=\"h1-custom\">\n" +
    "               ACHETER UNE BOISSON\n" +
    "            </h1>\n" +
    "            <p class=\"b-s25\">Vous désirez acheter une de nos BaeDrinks ? Pour l’instant les commandes ne sont pas encore ouvertes !\n" +
    "                Restez Informés de l’ouverture des commandes et de nos nouveautés en saisissant votre mail et en nous suivant sur nos réseaux sociaux</p>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <input type=\"text\" ng-model=\"email\" placeholder=\"example@domain.com\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <button class=\"btn btn-success full-width fs20\" ng-click=\"sendMail(email)\" >Envoyer</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<footer>\n" +
    "    <div class=\"footer navbar-fixed-bottom\">\n" +
    "        <div class=\"container\" style=\"padding-top: 20px\">\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-12\">\n" +
    "                    <div style=\"\n" +
    "    margin: auto;\">\n" +
    "                        <div class=\"social-media \">\n" +
    "                            <a href=\"https://www.facebook.com/BaeDrinks/?fref=ts\">\n" +
    "                            <div class=\"table-icon\">\n" +
    "                              <i class=\"fa fa-facebook facebook\"\n" +
    "                                                                                         aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"social-media\">\n" +
    "                            <a href=\"https://medium.com/@baedrinks\">\n" +
    "                            <div class=\"table-icon\">\n" +
    "                                <i class=\"fa fa-medium medium\"\n" +
    "                                                                            aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
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
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"text-center\" style=\"font-weight: bold; margin-top: 50px\">\n" +
    "            <p>  BAE DRINKS © 2017 All Rights Reserved. </p>\n" +
    "            <p><b>B</b>efore <b>A</b>nyone <b>E</b>lse</span></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
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
    "        <div ng-if=\"sucess\" style=\"    color: #33ff4e;\n" +
    "             border: 1px solid #33ff4e;\n" +
    "             padding: 10px;\">\n" +
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
    "\n" +
    "\n" +
    "\n" +
    "<footer>\n" +
    "    <div class=\"footer navbar-fixed-bottom\">\n" +
    "        <div class=\"container\" style=\"padding-top: 20px\">\n" +
    "\n" +
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
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"text-center\" style=\"font-weight: bold; margin-top: 50px\">\n" +
    "            <p>  BAE DRINKS © 2017 All Rights Reserved. </p>\n" +
    "            <p><b>B</b>efore <b>A</b>nyone <b>E</b>lse</span></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);

angular.module("/components/order/order.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/components/order/order.view.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top navbar-blue\">\n" +
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
    "        <form  class=\"form-horizontal\" role=\"form\" method=\"post\" style=\"margin-top: 50px\" ng-if=\"!sucess\">\n" +
    "            <li ng-if=\"error\" style=\"color: red\">Ce code n'existe pas !</li>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\" class=\"col-sm-2 control-label\">Code de participation :</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"order.code\" ng-change=\"newOrder()\"  placeholder=\"Code d'invitation bae\"  required ng-if=\"!success\">\n" +
    "                       <div  style=\"    color: #33ff4e;\n" +
    "             padding: 10px;\" ng-if=\"success\">\n" +
    "                    {{order.code}} -  code validé ! <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\" class=\"col-sm-2 control-label\">Email : </label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" ng-model=\"order.email\" id=\"email\" placeholder=\"example@domain.com\"  required >\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2 control-label\">Nom & Prénom : </label>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"order.firstname\" placeholder=\"Prénom\" required>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\"  ng-model=\"order.lastname\"  placeholder=\"Nom\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2 control-label\">Livraison : </label>\n" +
    "                <div class=\"col-sm-5\">\n" +
    "                    <input type=\"text\" class=\"form-control\" ng-model=\"order.adress\"  name=\"name\" placeholder=\"Adresse\" required>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <input type=\"text\" class=\"form-control\"  name=\"name\" ng-model=\"order.postal\" placeholder=\"code postal\" required>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-10 col-sm-offset-2\">\n" +
    "                    <li style=\"margin-bottom: 20px; color: #78a9ff; font-size: 18px; border: 1px solid #78a9ff; padding: 10px\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> Avant de valider votre commande soyez sur de votre adresse de livraison. Les commandes sont effectuées gratuitement à Namur, Belgique, directement envoyer via la poste.</li>\n" +
    "\n" +
    "                    <input id=\"submit\" name=\"submit\" type=\"submit\" value=\"Commander\" class=\"btn btn-primary btn-lg\" ng-if=\"!inProgress\" ng-click=\"sendOrder(order)\">\n" +
    "                    <a  type=\"submit\"  class=\"btn btn-warning\" ng-if=\"inProgress\"><i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
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
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"text-center\" style=\"font-weight: bold; margin-top: 50px\">\n" +
    "            <p>  BAE DRINKS © 2017 All Rights Reserved. </p>\n" +
    "            <p><b>B</b>efore <b>A</b>nyone <b>E</b>lse</span></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);
