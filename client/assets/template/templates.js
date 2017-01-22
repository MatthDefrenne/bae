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
    "                <li><a data-scroll class=\"btn-green-hover\" ng-click=\"GOTOWHAT()\">BAE C'EST QUOI ? </a></li>\n" +
    "                <li><a data-scrol class=\"btn-blue-hover\" ng-click=\"GOTOPRODUCT()\">PRODUITS</a></li>\n" +
    "                <li><a data-scroll class=\"btn-orange-hover\" ng-click=\"GOTOBUY()\">ACHETER</a></li>\n" +
    "                <li><a data-scroll>CONTACT</a></li>\n" +
    "            </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div><!--/.container-fluid -->\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"jumbotron header\">\n" +
    "    <div class=\"container container-header\">\n" +
    "        <h1 style=\"font-weight: bold; font-size: 70px\">Boissons <img src=\"./img/logo.png\"></h1>\n" +
    "        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies\n" +
    "            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo\n" +
    "            cursus magna. (Why)</p>\n" +
    "\n" +
    "        <div style=\"margin-top: 20px\">\n" +
    "            <button class=\"btn btn-empty btn-green-hover btn-lg\" ng-click=\"GOTOWHAT()\">BAE C'EST QUOI ?\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-blue-hover btn-lg\" ng-click=\"GOTOPRODUCT()\">NOS PRODUITS\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-orange-hover btn-lg\" ng-click=\"GOTOBUY()\">ACHETER\n" +
    "            </button>\n" +
    "            <button class=\"btn btn-empty btn-green-hover btn-lg\">CONTACT\n" +
    "            </button>\n" +
    "        </div>\n" +
    "        <div style=\"\n" +
    "    margin: auto; margin-top: 75px; margin-bottom: 50px\">\n" +
    "            <div class=\"social-media \">\n" +
    "                <div class=\"table-icon\">\n" +
    "                    <i class=\"fa fa-facebook facebook\" aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"social-media\">\n" +
    "                <div class=\"table-icon\">\n" +
    "                    <i class=\"fa fa-medium medium\" aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"social-media \">\n" +
    "        <span class=\"table-icon\">\n" +
    "<i class=\"fa fa-youtube-play youtube\" aria-hidden=\"true\"></i>\n" +
    "        </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"social-media \">\n" +
    "        <span class=\"table-icon\">\n" +
    "        <i class=\"fa fa-instagram instagram\" aria-hidden=\"true\"></i>\n" +
    "        </span>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-global-1\" id=\"WHATBAE\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle\">\n" +
    "        <div class=\"container\" style=\"margin-bottom: 40px; \">\n" +
    "            <h1 class=\"h1-custom\">Bae c'est quoi ?</h1>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-8\" style=\"font-size: 25px; margin-top: 25px\">\n" +
    "                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh\n" +
    "                        ultricies\n" +
    "                        vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent\n" +
    "                        commodo\n" +
    "                        cursus magna. (What)</p>\n" +
    "                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh\n" +
    "                        ultricies\n" +
    "                        cursus magna.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-2\">\n" +
    "    <div class=\"container marketing\" style=\"padding-top: 50px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-3\">\n" +
    "                <div class=\"img-center\">\n" +
    "                    <img class=\"img-circle\" src=\"./img/step-1.png\" alt=\"Generic placeholder image\" width=\"140\"\n" +
    "                         height=\"140\">\n" +
    "                </div>\n" +
    "                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies\n" +
    "                </p>\n" +
    "            </div><!-- /.col-lg-4 -->\n" +
    "            <div class=\"col-lg-1\">\n" +
    "                <img src=\"./img/arrow2.png\" class=\"arrow\" >\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-3\">\n" +
    "                <div class=\"img-center\">\n" +
    "                    <img class=\"img-circle\" src=\"./img/step-2.png\" alt=\"Generic placeholder image\" width=\"140\"\n" +
    "                         height=\"140\">\n" +
    "                </div>\n" +
    "                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras\n" +
    "                </p>\n" +
    "            </div><!-- /.col-lg-4 -->\n" +
    "            <div class=\"col-lg-1\">\n" +
    "                <img src=\"./img/arrow.png\" class=\"arrow\" >\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-3\">\n" +
    "                <div class=\"img-center\">\n" +
    "                    <img class=\"img-circle \" src=\"./img/step-3.png\" width=\"140\" height=\"140\">\n" +
    "                </div>\n" +
    "                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula\n" +
    "                </p>\n" +
    "            </div><!-- /.col-lg-4 -->\n" +
    "        </div><!-- /.row -->\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-3\" id=\"PRODUCT\">\n" +
    "    <div class=\"container marketing\"  style=\"display: table-cell; vertical-align: middle; text-align: center; \">\n" +
    "        <div class=\"container\" style=\"margin-bottom: 40px; padding-top: 20px;\">\n" +
    "            <h1 class=\"h1-custom\"  ng-if=\"!hasClickedOnProduct\">\n" +
    "                NOS PRODUITS\n" +
    "            </h1>\n" +
    "            <p ng-if=\"!hasClickedOnProduct\">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula\n" +
    "            </p>\n" +
    "            <div class=\"row\" style=\"margin-top: 25px\" ng-if=\"!hasClickedOnProduct\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3 cursor\" ng-click=\"clickOnProduct('BAE BRAIN')\">\n" +
    "                    <div class=\"bae-sleep\"></div>\n" +
    "                    <h1>BAE BRAIN\n" +
    "                    </h1>\n" +
    "                    <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>\n" +
    "                    <p style=\"font-weight: bold; font-size: 25px\">2,49 Euros</p>\n" +
    "                    <button class=\"button-responsive btn btn-success\">Voir la boisson</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-1\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-3 cursor\" ng-click=\"clickOnProduct('BAE SLEEP')\">\n" +
    "                    <div class=\"bae-sleep\"></div>\n" +
    "                    <h1>BAE SLEEP\n" +
    "                    </h1>\n" +
    "                    <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>\n" +
    "                    <p style=\"font-weight: bold; font-size: 25px\">2,49 Euros</p>\n" +
    "                    <button class=\"button-responsive btn btn-success\">Voir la boisson</button>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\" style=\"margin-top: 25px\" ng-if=\"hasClickedOnProduct\">\n" +
    "                <div class=\"fs20 cursor\" style=\"margin-bottom: 20px\" ng-click=\"closeProduct()\">\n" +
    "                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n" +
    "                    Retour aux produits\n" +
    "                </div>\n" +
    "                    <div class=\"col-md-7 col-md-push-5\">\n" +
    "                        <h1 style=\"font-size: 50px\">{{name}}</h1>\n" +
    "                        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n" +
    "                        <p class=\"lead\">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>\n" +
    "                        <button class=\"btn btn-success full-width fs20\" ng-click=\"GOTOBUY()\">Acheter une {{name}}</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-5 col-md-pull-7\">\n" +
    "                        <div class=\"bae-sleep\"></div>\n" +
    "                    </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container-global-4\" id=\"BUY\">\n" +
    "    <div class=\"container marketing\" style=\"display: table-cell; vertical-align: middle\">\n" +
    "        <div class=\"container\">\n" +
    "            <h1 class=\"h1-custom\">\n" +
    "                ACHETER BAE\n" +
    "            </h1>\n" +
    "            <p style=\"font-weight: bold; font-size: 25px\">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula</p>\n" +
    "            <div  class=\"row\">\n" +
    "                <div class=\"col-lg-2\">\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <button class=\"btn btn-success full-width \">Avoir une invitation</button>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-4\">\n" +
    "                    <button class=\"btn btn-success full-width\" ng-disabled=\"true\" title=\"\">Commander une boisson Bae</button>\n" +
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
    "            <div class=\"row\" >\n" +
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
    "                            <div class=\"table-icon\">\n" +
    "                                <i class=\"fa fa-facebook facebook\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"social-media\">\n" +
    "                            <div class=\"table-icon\">\n" +
    "                                <i class=\"fa fa-medium medium\" aria-hidden=\"true\"></i>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"social-media \">\n" +
    "        <span class=\"table-icon\">\n" +
    "<i class=\"fa fa-youtube-play youtube\" aria-hidden=\"true\"></i>\n" +
    "        </span>\n" +
    "                        </div>\n" +
    "                        <div class=\"social-media \">\n" +
    "        <span class=\"table-icon\">\n" +
    "        <i class=\"fa fa-instagram instagram\" aria-hidden=\"true\"></i>\n" +
    "        </span>\n" +
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
    "            BAE DRINKS © 2016 - 2017 <img style=\"width: 60px; margin-left: 20px; margin-bottom: 20px\" src=\"./img/logo2.png\"><span style=\"margin-left: 20px\"><b>B</b>efore <b>A</b>nyone <b>E</b>lse</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);
