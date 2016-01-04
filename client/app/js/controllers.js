'use strict';

/* Controllers */

var adopteitorApp = angular.module('adopteitorApp', ['ui.bootstrap']);

adopteitorApp.controller('MasterCtrl', function ($scope, $location, djangoAuth) {
    // Assume user is not logged in until we hear otherwise
    $scope.authenticated = false;
    // Wait for the status of authentication, set scope var to true if it resolves
    djangoAuth.authenticationStatus(true).then(function(){
        $scope.authenticated = true;
    });
    // Wait and respond to the logout event.
    $scope.$on('djangoAuth.logged_out', function() {
      $scope.authenticated = false;
    });
    // Wait and respond to the log in event.
    $scope.$on('djangoAuth.logged_in', function() {
      $scope.authenticated = true;
    });
    // If the user attempts to access a restricted page, redirect them back to the main page.
    $scope.$on('$routeChangeError', function(ev, current, previous, rejection){
      console.error("Unable to change routes.  Error: ", rejection)
      $location.path('/login').replace();
    });
  });

adopteitorApp.controller('LoginCtrl', ['$scope', '$location', 'djangoAuth', 'Validate',
    function ($scope, $location, djangoAuth, Validate) {
        $scope.model = {'username':'','password':''};
        $scope.complete = false;
        $scope.login = function(formData){
            $scope.errors = [];
            Validate.form_validation(formData,$scope.errors);
            if(!formData.$invalid){
                djangoAuth.login($scope.model.username, $scope.model.password)
                .then(function(data){
                    // success case
                    $location.path("/");
                },function(data){
                    // error case
                    $scope.errors = data;
                });
            }
        }
    }
]);

adopteitorApp.controller('LogoutCtrl', ['$scope', '$location', 'djangoAuth',
    function ($scope, $location, djangoAuth) {
        djangoAuth.logout();
    }
]);

adopteitorApp.controller('GalgosEnAdopcionCtrl', ['$scope', '$location',
    function ($scope, $location) {
        $scope.galgosEnAdopcion = [
                {"id": 1, "nombre": "Galgo 1", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":2},
                {"id": 2, "nombre": "Galgo 2", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":4},
                {"id": 3, "nombre": "Galgo 3", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":6},
                {"id": 4, "nombre": "Galgo 4", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":6}
              ];
    }
]);
