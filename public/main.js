alert("loading public files");
var myapp = angular.module("myApp", ["ngRoute"]);
myapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/static/list.ejs"
    })
});