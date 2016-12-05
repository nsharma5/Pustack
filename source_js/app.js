var app = angular.module('pustack',['ngRoute', 'pustackControllers', 'pustackServices']);

app.config(function ($routeProvider) {
	$routeProvider
		.when ('/',{
			templateUrl:'partials/landing.html',
			controller: 'landingController'
		})
		.when ('/lectures',{
			templateUrl:'partials/lectures.html',
			controller: 'lectureController'
		})

		.when ('/mycourses',{
			templateUrl:'partials/mycourses.html',
			controller: 'mycoursesController'
		})

		.when ('/subjects',{
			templateUrl:'partials/subjects.html',
			controller: 'subjectController'
		})

		.when('/videos', {
			templateUrl: 'partials/videos.html',
			controller: 'videosController'
		});
});
