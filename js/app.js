var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
$routeProvider.
when('/home', {
	templateUrl:'partial/home.html'
}).
when('/about',{
	templateUrl:'partial/about.html'
}).
when('/contact',{
	templateUrl:'partial/contact.html'
}).
when('/services',{
	templateUrl:'partial/services.html'
}).
otherwise({
	redirectTo:'/home'
});
}]);