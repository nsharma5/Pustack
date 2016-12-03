var app = angular.module('pustack',['ngRoute', 'pustackControllers', 'pustackServices']);

app.config(function ($routeProvider) {
	$routeProvider
		.when ('/',{
			templateUrl:'partials/landing.html',
			controller: 'landingController'
		})
		.when ('/landing/subjects',{
			templateUrl:'partials/subjects.html',
			controller: 'subjectController'
		});
});
