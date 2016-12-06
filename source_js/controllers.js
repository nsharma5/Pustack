var pustackControllers = angular.module('pustackControllers',[]);

pustackControllers.controller('landingController', ['$scope', '$http', '$window' , 'UsersService' , function($scope, $http, $window, UsersService) {

  $scope.users  = UsersService;

  $scope.createUser = function () {
    
    $scope.users.createUser($scope.users.newUser)
      .then(function () {
        console.log("User Created");
      })
  };

  $scope.loginUser = function () {
    $scope.users.login($scope.users.userLoggingIn);
    //console.log("here", $scope.users.loggedUser);
  };

}]);

pustackControllers.controller('subjectController', ['$scope', '$http', '$window' , 'UsersService' , 'SubjectsService' , function($scope, $http, $window, UsersService, SubjectsService) {

  $scope.users  = UsersService;
  $scope.subjects = SubjectsService;

  $scope.getSubjects = function () {
    $scope.subjects.getSubjects(standard);
    //console.log("here", $scope.users.loggedUser);
  };

}]);

pustackControllers.controller('chapterController', ['$scope', '$http', '$window' , 'UsersService' , 'SubjectsService' , 'ChaptersService' , function($scope, $http, $window, UsersService, SubjectsService, ChaptersService) {

  $scope.users    = UsersService;
  $scope.subjects = SubjectsService;
  $scope.chapters = ChaptersService;

}]);


pustackControllers.controller('mycoursesController', ['$scope', '$window', function($scope, $window) {
	
}]);


pustackControllers.controller('videosController', ['$scope', '$window', function($scope, $window) {
	
}]);
