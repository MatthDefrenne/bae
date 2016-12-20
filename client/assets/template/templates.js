angular.module('templates-main', ['components/add-product/add-product.view.html', 'components/chat/chat.view.html', 'components/home/home.view.html', 'components/info-user/info-user.view.html', 'components/navbar-home/navbar-home.view.html', 'components/navbar-search/navbar-search.view.html', 'components/navbar/navbar.view.html', 'components/product/products.view.html', 'components/products/product.view.html', 'components/profile/profile.view.html', 'components/ratings-user/ratings-user.view.html']);

angular.module("components/add-product/add-product.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/add-product/add-product.view.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "</div>");
}]);

angular.module("components/chat/chat.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/chat/chat.view.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "</div>");
}]);

angular.module("components/home/home.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/home/home.view.html",
    "<div class=\"container\">\n" +
    "\n" +
    "</div>");
}]);

angular.module("components/info-user/info-user.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/info-user/info-user.view.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "</div>");
}]);

angular.module("components/navbar-home/navbar-home.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/navbar-home/navbar-home.view.html",
    "<nav class=\"navbar navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">NAVBAR HOME</a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li><a href=\"\">Feedback</a></li>\n" +
    "                <li><a href=\"\">Feedback</a></li>\n" +
    "                <li><a href=\"\">Feedback</a></li>\n" +
    "            </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div>\n" +
    "</nav>");
}]);

angular.module("components/navbar-search/navbar-search.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/navbar-search/navbar-search.view.html",
    "<nav class=\"navbar navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">NAVBAR</a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <!---<li ng-class=\"isOnLocation('/admin-home/') ? 'active' : '' \"><a href=\"/home/\">Home</a></li> ---->\n" +
    "                <!---<li ng-class=\"isOnLocation('/actions/') ? 'active' : '' \"><a href=\"/actions/\">Actions</a></li> --->\n" +
    "                <!---<li ng-class=\"isOnLocation('/ambassador/') ? 'active' : '' \"><a href=\"/ambassador/\">Ambassadors</a></li>--->\n" +
    "                <li ng-class=\"isOnLocation('/reports/') ? 'active' : ''\"><a href=\"/reports/\">Reports</a></li>\n" +
    "                <li ng-class=\"isOnLocation('/feedback/') ? 'active' : ''\"><a href=\"/feedback/\">Feedback</a></li>\n" +
    "            </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div>\n" +
    "</nav>");
}]);

angular.module("components/navbar/navbar.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/navbar/navbar.view.html",
    "<nav class=\"navbar navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "                <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\">NAVBAR</a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <!---<li ng-class=\"isOnLocation('/admin-home/') ? 'active' : '' \"><a href=\"/home/\">Home</a></li> ---->\n" +
    "                <!---<li ng-class=\"isOnLocation('/actions/') ? 'active' : '' \"><a href=\"/actions/\">Actions</a></li> --->\n" +
    "                <!---<li ng-class=\"isOnLocation('/ambassador/') ? 'active' : '' \"><a href=\"/ambassador/\">Ambassadors</a></li>--->\n" +
    "                <li ng-class=\"isOnLocation('/reports/') ? 'active' : ''\"><a href=\"/reports/\">Reports</a></li>\n" +
    "                <li ng-class=\"isOnLocation('/feedback/') ? 'active' : ''\"><a href=\"/feedback/\">Feedback</a></li>\n" +
    "            </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "    </div>\n" +
    "</nav>");
}]);

angular.module("components/product/products.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/product/products.view.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "</div>");
}]);

angular.module("components/products/product.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/products/product.view.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "</div>");
}]);

angular.module("components/profile/profile.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/profile/profile.view.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "</div>");
}]);

angular.module("components/ratings-user/ratings-user.view.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("components/ratings-user/ratings-user.view.html",
    "<div class=\"container\">\n" +
    "    \n" +
    "</div>");
}]);
