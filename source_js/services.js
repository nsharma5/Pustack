var pustackServices = angular.module('pustackServices',['ngResource', 'toaster', 'ngAnimate', 'mgcrea.ngStrap']);

pustackServices.factory('Users', function($http, $resource) {
    return $resource('https://pustack.herokuapp.com' + '/api/users/:id/', {id: '@_id'}, {
        update: {
            method: 'PUT'
        }
    });
});

app.service('UsersService', function (Users, $q, toaster) {
    var self =  {
    				'newUser': null,
                    'selectedUser': null,
                    'UsersList': [],
                    'search': null,
                    'sort': {"name": 1},
                    'createUser': function (user) {
                    	console.log("createUser called", user);
                        var d = $q.defer();
                        Users.save(user).$promise.then(function () {
                            self.newUser = null;
                            toaster.pop('success', 'Created ' + user.name);
                            d.resolve()
                        });
                        return d.promise;
                    }

                };

    return self;
});
