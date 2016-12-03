var app = angular.module('pustack',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when ('/',{
			templateUrl:'partials/landing.html',
			controller: 'landingController'
		});
});
