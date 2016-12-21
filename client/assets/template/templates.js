angular.module('templates-main', ['components/home/home.view.html', 'components/products/products.view.html']);

angular.module("components/home/home.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/home/home.view.html",
    "<div class=\"jumbotron\">\n" +
    "    <div class=\"container\">\n" +
    "        <h1 class=\"fwb\">Drinky</h1>\n" +
    "        <p>\n" +
    "        <b>Une boisson 100% naturelle</b> qui vous offre tout ce que vous avez besoin pour être en bonne santé\n" +
    "        <p>\n" +
    "        <a class=\"btn btn-danger btn-lg\" href=\"/products/\" ng-click=\"logEvent('clickOnBuyNow')\" role=\"button\">Acheter maintenant <i class=\"glyphicon glyphicon-chevron-right\"></i></a></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\" style=\"margin-top: 40px; \">\n" +
    "    <h4>Partage drinky à tes amis et gagne une boisson gratuite ! <a href=\"\"  type=\"button\" data-toggle=\"modal\" data-target=\"#shareModal\" class=\"ta-c\" ng-click=\"logEvent('clickOnShareDrinky')\" style=\"font-size: 20px; font-weight: bold; margin-bottom: 25px\">Clique ici 👍</a> </h4>\n" +
    "    <div style=\"margin-bottom: 20px;\n" +
    "    text-align: center;\n" +
    "    font-size: 30px;\n" +
    "    font-weight: bold;\n" +
    "    margin-top: 20px;\n" +
    "    \">Ce que Drinky vous apporte</div>\n" +
    "    <!-- Three columns of text below the carousel -->\n" +
    "    <div class=\"row\" style=\"text-align: center; margin-bottom: 15px;\">\n" +
    "        <div class=\"col-lg-4\">\n" +
    "            <img class=\"img-circle\" src=\"http://image.flaticon.com/icons/svg/147/147167.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "            <h2>Réduction stresse et anxiété</h2>\n" +
    "            <p>Drinky <b>réduit activement votre stress</b> et votre anxiété.</p>\n" +
    "        </div><!-- /.col-lg-4 -->\n" +
    "        <div class=\"col-lg-4\">\n" +
    "            <img class=\"img-circle\" src=\"http://image.flaticon.com/icons/svg/201/201633.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "            <h2>Restez concentré !</h2>\n" +
    "            <p>Drinky est composé de principes actifs qui vous permettent de rester concentré. Il sera votre meilleur alié lors de vos examens, ou lors de travaux mantaux très intensif.</p>\n" +
    "        </div><!-- /.col-lg-4 -->\n" +
    "        <div class=\"col-lg-4\">\n" +
    "            <img class=\"img-circle\" src=\"http://image.flaticon.com/icons/svg/126/126464.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "            <h2>Beaucoup d'énergie !</h2>\n" +
    "            <p><b>Drinky ne vous laissera jamais tomber lorsque vous manquez d'énergie</b>, notre formule vous maintiendra en forme toute la journée !</p>\n" +
    "        </div><!-- /.col-lg-4 -->\n" +
    "    </div><!-- /.row -->\n" +
    "\n" +
    "    <div type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"ta-c\">\n" +
    "        <a ng-click=\"logEvent('clickOnIngredients')\" style=\"margin-bottom: 20px;\n" +
    "    font-size: 20px;\n" +
    "    font-weight: bold;\n" +
    "    text-decoration: none;\n" +
    "    cursor: pointer;\n" +
    "    \">Les ingrédients de Drinky <i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Modal -->\n" +
    "    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "        <div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                    <h4 class=\"modal-title\">De quoi est composé Drinky ?</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <div class=\"row\" style=\"text-align: center; margin-bottom: 15px;\">\n" +
    "                        <div class=\"col-lg-4\">\n" +
    "                            <img class=\"img-circle\" src=\"http://mr-ginseng.com/wp-content/uploads/2012/01/ginkgo-biloba.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <h3>Ginko biloba</h3>\n" +
    "\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                        <div class=\"col-lg-4\">\n" +
    "                            <img class=\"img-circle\" src=\"http://mr-ginseng.com/wp-content/uploads/2012/01/rhodiola.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <h3>Rhodiola Rosea</h3>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                        <div class=\"col-lg-4\">\n" +
    "                            <img class=\"img-circle\" src=\"https://sc01.alicdn.com/kf/HTB1qqlmJFXXXXXHXpXXq6xXFXXXx/1282587/HTB1qqlmJFXXXXXHXpXXq6xXFXXXx.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <h3>Coenzyme q10</h3>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "                    </div><!-- /.row -->\n" +
    "\n" +
    "                    <div class=\"row\" style=\"text-align: center; margin-bottom: 15px;\">\n" +
    "                        <div class=\"col-lg-4\">\n" +
    "                            <img class=\"img-circle\" src=\"http://4.bp.blogspot.com/-A9wluzJvc6g/UBlKWRz_mhI/AAAAAAAAAIw/rhj_aibggq4/s1600/panax-ginseng-side-effects.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <h3>Giseng rouge</h3>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "\n" +
    "                        <div class=\"col-lg-4\">\n" +
    "                            <img class=\"img-circle\" src=\"http://methodes-douces-et-bien-etre.com/wp-content/uploads/2013/06/Fotolia_45194568_XS1.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <h3>Thé vert</h3>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "\n" +
    "                        <div class=\"col-lg-4\">\n" +
    "                            <img class=\"img-circle\" src=\"http://konradmarkham.com/wp-content/uploads/2014/11/bigstock-vitamins-pills-and-tablets-16253030.jpg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n" +
    "                            <h3>100% des vitamines et mineraux journalier</h3>\n" +
    "                        </div><!-- /.col-lg-4 -->\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fermer</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <!-- START THE FEATURETTES -->\n" +
    "    <hr class=\"featurette-divider\">\n" +
    "\n" +
    "    <div class=\"row featurette\">\n" +
    "        <div class=\"col-md-7\">\n" +
    "            <h2 class=\"featurette-heading\">Drinky, c'est quoi ?</h2>\n" +
    "            <p class=\"lead\">\n" +
    "                Drinky c'est une boisson à la framboise de 330ml,\n" +
    "                elle est composée de plante 100% naturelle ainsi que d'un apport journalier en vitamine B12 & Fer.\n" +
    "                Que vous ayez un coup de moux ou que vous avez envie de consommer simplement une boisson soft, Drinky est la meilleur solution.\n" +
    "            </p>\n" +
    "\n" +
    "            <p class=\"lead\">\n" +
    "                <b>Drinky c'est aussi une équipe, suivez-nous sur les réseaux sociaux :</b>\n" +
    "            </p>\n" +
    "\n" +
    "            <div class=\"mt10\"><a href=\"https://www.facebook.com/Drinky-308767716189772/?ref=bookmarks\" target=\"_blank\" style=\"margin-right: 30px;\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n" +
    "                <b>Facebook</b></a>\n" +
    "                <a href=\"https://www.instagram.com/drinky_healthy/\" target=\"_blank\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n" +
    "                    <b>Instagram</b></a>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-5\">\n" +
    "            <img class=\"featurette-image img-responsive center-block\" src=\"./img/tea.jpg\" data-holder-rendered=\"true\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"row featurette\" ng-if=\"false\">\n" +
    "        <hr class=\"featurette-divider\">\n" +
    "\n" +
    "        <div class=\"col-md-7\">\n" +
    "            <h2 class=\"featurette-heading\">Ce que les gens en disent <a style=\"font-size: 18px; margin-left: 10px\">Partager votre avis</a></h2>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12 mt10\">\n" +
    "            <p class=\"well\">\n" +
    "                <img class=\"profile-pp-100\" src=\"{{oneTestimonial.photo}}\">\n" +
    "                <b style=\"    font-size: 30px;\">{{oneTestimonial.name}}</b>&nbsp; {{oneTestimonial.role}}<br/>\n" +
    "                <a href=\"\" ng-click=\"nextTestiomial()\" style=\"float: right;\n" +
    "    font-size: 30px;\n" +
    "    position: relative;\n" +
    "    top: -25px;\"><i class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></i>\n" +
    "                </a>\n" +
    "\n" +
    "                <i style=\"font-size: 17px\">{{oneTestimonial.text}}</i></p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <!-- Modal -->\n" +
    "    <div class=\"modal fade\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "        <div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                    <h4 class=\"modal-title\">Partager Drinky à mes amis</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                   <div><b>Pourquoi partager Drinky ? :</b></div>\n" +
    "\n" +
    "                    <p class=\"mt10\">Lorsque vous partager Drinky à vos amis cela permet de faire grandir notre communauté,\n" +
    "                    de plus lorsque vous réussisez à faire partager Drinky et que votre amis achète au moins une boisson vous recevez automatiquement par mail une confirmation d'une boisson gratuite.\n" +
    "                    </p>\n" +
    "\n" +
    "                    <div><b>Comment je peux partager ? :</b></div>\n" +
    "                    <p class=\"mt10\">Pour partager Drinky à tes amis clique commence par leur envoyer un message via messenger</p>\n" +
    "\n" +
    "                    <div><b>Quelles conditions  ? :</b></div>\n" +
    "                    <p class=\"mt10\" style=\"color: red \"><b>Pour pouvoir bénéficier d'un parainnage vous devez déjà avoir acheter une boisson Drinky. <a  data-dismiss=\"modal\" href=\"/products/\">Cliquer ici pour acheter Drinky</a></b></p>\n" +
    "\n" +
    "                    <div class=\"row\" style=\"    padding: 20px;\n" +
    "    border: 5px solid black;\n" +
    "    margin: 20px;\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <label>Étape 1 : Votre adresse email avec laquelle vous avez acheter précédement Drinky </label>\n" +
    "                                <input  ng-model=\"emailToShare\" type=\"email\" placeholder=\"example@gmail.com\" class=\"form-control input-md\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <div class=\"col-md-8 mt10\" >\n" +
    "                                <label style=\"margin-right: 10px\">Étape 2 : Partager sur Facebook </label><button ng-disabled=\"!emailToShare\" class=\"btn btn-sm btn-primary\" ng-click=\"shareOnMessenger()\">Envoyer par messenger</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"modal-footer\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fermer</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <footer>\n" +
    "        <p>© 2016 Company, Inc. · <a href=\"#\">Privacy</a> · <a href=\"#\">Terms</a></p>\n" +
    "    </footer>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/products/products.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/products.view.html",
    "<div class=\"container\" style=\"margin-top: 40px; \">\n" +
    "\n" +
    "    <h2>Achetez Drinky</h2>\n" +
    "    <hr class=\"featurette-divider\">\n" +
    "\n" +
    "\n" +
    "    <div class=\"row featurette\">\n" +
    "        <div class=\"col-md-7 col-md-push-5\">\n" +
    "            <h2 class=\"featurette-heading\">Drinky 330ml</h2>\n" +
    "            <p class=\"lead\">Uniquement disponible en goût framboise (Pour l'instant)</p>\n" +
    "                <select ng-model=\"quantity\" class=\"form-control\">\n" +
    "                    <option value=\"1\">Une bouteille</option>\n" +
    "                    <option value=\"6\">6 bouteilles</option>\n" +
    "                    <option value=\"12\">12 bouteilles</option>\n" +
    "                    <option value=\"24\">24 Bouteilles</option>\n" +
    "                    <option value=\"48\">48 Bouteilles</option>\n" +
    "                </select>\n" +
    "            <div style=\"margin-top: 20px\"><h1>€ {{quantity * 1.25 | limitTo: 4}}</h1>  <b style=\"margin-top: 5px;\">Satisfait ou rembourser</b></div>\n" +
    "\n" +
    "            <button ng-click=\"logEvent('clickOnBuyDrinky')\" data-toggle=\"modal\" data-target=\"#buyModal\" class=\"btn btn-success\" style=\"width: 300px; margin-top: 10px\">Commander</button>\n" +
    "\n" +
    "            <div class=\"modal fade\" id=\"buyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n" +
    "                <div class=\"modal-dialog\" role=\"document\">\n" +
    "                    <div class=\"modal-content\">\n" +
    "                        <div class=\"modal-header\">\n" +
    "                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "                            <h4 class=\"modal-title\">Commander Drinky</h4>\n" +
    "                        </div>\n" +
    "                        <div class=\"modal-body\">\n" +
    "                            <form class=\"form-horizontal mt10\">\n" +
    "                                <fieldset>\n" +
    "                                    <div class=\"form-group\" >\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <input name=\"name\" ng-model=\"order.name\" type=\"text\" placeholder=\"Nom\" class=\"form-control input-md\">\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-6\">\n" +
    "                                            <input  name=\"firstname\" ng-model=\"order.firstname\" type=\"text\" placeholder=\"Prénom\" class=\"form-control input-md\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"form-group\">\n" +
    "                                        <div class=\"col-md-12\">\n" +
    "                                            <input  name=\"textinput\" ng-model=\"order.mail\" type=\"email\" placeholder=\"example@gmail.com\" class=\"form-control input-md\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"form-group\">\n" +
    "                                        <div class=\"col-md-8\">\n" +
    "                                            <input  name=\"textinput\" ng-model=\"order.adress\"  type=\"text\" placeholder=\"Adresse de livraison\" class=\"form-control input-md\">\n" +
    "\n" +
    "                                        </div>\n" +
    "                                        <div class=\"col-md-4\">\n" +
    "                                            <input  name=\"textinput\" ng-model=\"order.codepostal\" type=\"text\" placeholder=\"Code postal\" class=\"form-control input-md\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <li ng-if=\"allEmpty\" style=\"color: red;\">Merci de remplire tous les champs</li>\n" +
    "                                    <i style=\"margin-top: 25px\"><i>Une fois que vous avez envoyer une demande, votre commande est livrée en 24h entre 8h et 16h00, le payement est effectué sur place.</i></i>\n" +
    "                                </fieldset>\n" +
    "                            </form>\n" +
    "                        </div>\n" +
    "                        <div ng-if=\"error\">Une erreur est servenue</div>\n" +
    "                        <div class=\"modal-footer\">\n" +
    "                            <i class=\"fa fa-spinner fa-spin fa-3x fa-fw\" ng-if=\"inProgress\"></i>\n" +
    "                            <button type=\"button\" ng-click=\"sendOrder(order)\" class=\"btn btn-success\">Envoyer</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"mt10\" style=\"color: red; font-weight: bold; margin-top: 25px\"><i>Vous avez envie de tester la boisson avant de l'acheter ? C'est possble, mais uniquement sur Namur. Si vous voulez la tester envoyer nous un message sur Facebook 😉 </i>\n" +
    "            </div>\n" +
    "            <div class=\"mt10\"><a href=\"https://www.facebook.com/Drinky-308767716189772/?ref=bookmarks\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n" +
    "                 Notre page Facebook\n" +
    "            </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-md-5 col-md-pull-7\">\n" +
    "            <img class=\"featurette-image img-responsive center-block\" src=\"./img/tea.jpg\" data-holder-rendered=\"true\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <footer style=\"margin-top: 40px\">\n" +
    "            <p>© 2016 Company, Inc. · <a href=\"#\">Privacy</a> · <a href=\"#\">Terms</a></p>\n" +
    "    </footer>\n" +
    "\n" +
    "</div>");
}]);
