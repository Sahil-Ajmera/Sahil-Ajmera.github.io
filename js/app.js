var app = angular.module("MyApp",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller:"MainController",
		templateUrl:"views/main.html"
	})
	.when('/resume',{
		controller:"ResumeController",
		templateUrl:"views/resume.html"
	})
	.when('/impressions',{
		controller:"MainController",
		templateUrl:"views/impressions.html"
	})
	.when('/about',	{
		controller:"MainController",
		templateUrl:"views/about.html"
	})
	.when('/contact',	{
		controller:"MainController",
		templateUrl:"views/contact.html"
	})
	.otherwise({
		redirectTo:'/'})
})