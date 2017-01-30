angular.module('templates-main', ['/components/home/home.view.html']);

angular.module("/components/home/home.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("/components/home/home.view.html",
    "<nav class=\"navbar navbar-default navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
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
    "            <ul class=\"nav navbar-nav navbar-left\">\n" +
    "                <li><a data-scroll class=\"btn-green-hover\" title=\"WHAT IS BAE ?\" ng-click=\"GOTOWHAT()\">WHAT IS BAE ?</a></li>\n" +
    "                <li><a data-scrol class=\"btn-blue-hover\" title=\"OUR BAE DRINKS\" ng-click=\"GOTOPRODUCT()\">OUR BAE DRINKS</a></li>\n" +
    "                <li><a data-scroll class=\"btn-orange-hover\" title=\"ORDER BAE\" ng-click=\"GOTOBUY()\">ORDER BAE</a></li>\n" +
    "                <li><a data-scroll>CONTACT</a></li>\n" +
    "            </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div><!--/.container-fluid -->\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"jumbotron header\">\n" +
    "    <div class=\"container container-header\">\n" +
    "\n" +
    "            <img alt=\"baedrink - improve your self naturaly\" style=\"width: 80%\" src=\"./img/logo.png\">\n" +
    "\n" +
    "        <div style=\"margin-top: 40px\">\n" +
    "            <button class=\"btn btn-empty btn-green-hover btn-lg\" href=\"WHATBAE\" title=\"WHAT IS BAE ?\" ng-click=\"GOTOWHAT()\">WHAT IS BAE  ?\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-blue-hover btn-lg\" href=\"PRODUCT\" title=\"OUR BAE DRINKS\" ng-click=\"GOTOPRODUCT()\">OUR BAE DRINKS\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-orange-hover btn-lg\" href=\"BUY\" title=\"ORDER BAE\" ng-click=\"GOTOBUY()\">ORDER BAE\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-red-hover btn-lg\" title=\"CONTACT\">CONTACT\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div style=\"\n" +
    "    margin: auto; margin-top: 75px; margin-bottom: 50px\">\n" +
    "            <div class=\"social-media \">\n" +
    "                <a href=\"https://www.facebook.com/BaeDrinks/?fref=ts\">\n" +
    "                <div class=\"table-icon\">\n" +
    "                    <i class=\"fa fa-facebook facebook\"\n" +
    "                                                                                  aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"social-media\">\n" +
    "                <a href=\"https://medium.com/@baedrinks\">\n" +
    "                <div class=\"table-icon\">\n" +
    "                     <i class=\"fa fa-medium medium\"\n" +
    "                                                                aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"social-media \">\n" +
    "                <a href=\"https://www.instagram.com/baedrinks/\">\n" +
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
    "            <h1 class=\"h1-custom\">WHAT IS BAE DRINKS ?</h1>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-8\" style=\"font-size: 25px; margin-top: 25px\">\n" +
    "                    <p>At Bae we Listen carefully to the nature\n" +
    "                        to help people improve their lifestyle\n" +
    "\n" +
    "                        Nature has always taught us how to stay safe and healthy. Everytime we deviate\n" +
    "                        from the natural schema, things go missy and our lifestyle quality decreases!\n" +
    "\n" +
    "                        <p style=\"margin-top: 20px;\">At bae, we analyze how things happen naturally, then we design natural\n" +
    "                        drinks based on that, to help people improve their lifestyle quality.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-3\" id=\"PRODUCT\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle; text-align: center; \">\n" +
    "        <div class=\"container\" style=\"margin-bottom: 40px; padding-top: 20px;\">\n" +
    "            <h1 class=\"h1-custom\" ng-if=\"!hasClickedOnProduct\">\n" +
    "               BAE SLEEP\n" +
    "            </h1>\n" +
    "            <div class=\"row\" style=\"margin-top: 25px\" >\n" +
    "                <div class=\"fs20 cursor\" style=\"margin-bottom: 20px\" ng-click=\"closeProduct()\" ng-if=\"false\">\n" +
    "                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n" +
    "                    Retour aux produits\n" +
    "                </div>\n" +
    "                <div class=\"col-md-7 col-md-push-5\">\n" +
    "                    <p class=\"lead\">\n" +
    "                        Do you want to relax and take a nap ? Do you hardly find sleep overnights ?\n" +
    "                        At Bae we thought about you, we studied how your body and specially your brain\n" +
    "                        works, then we designed a tasty drink to help you relax and sleep.\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-lg-6\">\n" +
    "                            <img class=\"img-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <p>Melatonine</p>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                        <div class=\"col-lg-6\">\n" +
    "                            <img class=\"img-circle\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <p>Flavor</p>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                    </div><!-- /.row -->\n" +
    "\n" +
    "\n" +
    "                    <button class=\"btn btn-success full-width fs20\" ng-click=\"GOTOBUY()\">buy a bae sleep</button>\n" +
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
    "               BUY BAE\n" +
    "            </h1>\n" +
    "            <p style=\"font-weight: bold; font-size: 25px\">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,\n" +
    "                egestas eget quam. Vestibulum id ligula</p>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <button class=\"btn btn-success full-width  \" ng-disabled=\"true\" title=\"Les invitations serons ouverte très prochainement\">Avoir une invitation</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <button class=\"btn btn-success full-width\" ng-disabled=\"true\" title=\"La commande de boisson bae n'est pas encore disponible\">Commander une boisson Bae\n" +
    "                    </button>\n" +
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
    "                <div class=\"col-lg-2\">\n" +
    "                    <ul class=\"li-grey\">\n" +
    "                        <li><a href=\"\">A propos de nous</a></li>\n" +
    "                        <li><a href=\"\">Général</a></li>\n" +
    "                        <li><a href=\"\">Contactez nous</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-lg-3\">\n" +
    "                    <label>Envie d'être tenu au courrant ? Inscrivez-vous au newsletter !</label>\n" +
    "                    <input type=\"email\" placeholder=\"example@domaine.com\" class=\"form-control\">\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-lg-6\">\n" +
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
    "            BAE DRINKS © 2017 <img style=\"width: 60px; margin-left: 20px; margin-bottom: 20px\"\n" +
    "                                   src=\"./img/logo2.png\"><span style=\"margin-left: 20px\"><b>B</b>efore <b>A</b>nyone <b>E</b>lse</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);
