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


pustackControllers.controller('subjectController', ['$scope', '$window', function($scope, $window) {
	
}]);

pustackControllers.controller('lectureController', ['$scope', '$window', function($scope, $window) {
	
}]);

pustackControllers.controller('mycoursesController', ['$scope', '$window', function($scope, $window) {
	
}]);

pustackControllers.controller('subjectController', ['$scope', '$window', function($scope, $window) {
	
}]);

pustackControllers.controller('videosController', ['$scope', '$window', function($scope, $window) {
	
}]);
