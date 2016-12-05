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
                    'userLoggingIn': null,
                    'loggedUser': null,
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
                    },
                    'login': function (user){
                    	console.log("login called", user);
                    	var params = {
                            'where': {"email": user.email, "password": user.password}
                        };

                        Users.get(params, function (data) {
        					if (data["data"][0][0])
        					{
                            	self.loggedUser = data["data"][0][0];
                            	console.log(self.loggedUser);

                            }
                            else
                            {
                            	console.log("Wrong Credentials");
                            }
                        });
                    }

                };

    return self;
});
