'use strict';

adopteitorApp.factory('enAdopcion', ['$resource', function($resource){
    return $resource('http://localhost:8000/enAdopcion/', null, {'query':{method: 'GET', isArray: true}});
}]);

adopteitorApp.controller('GalgosEnAdopcion', ['$scope', '$location', 'enAdopcion',
    function ($scope, $location, enAdopcion) {
              $scope.galgosEnAdopcion = enAdopcion.query();
              $scope.galgosEnAdopcion.$promise.then(function(data) {
                  $scope.galgosEnAdopcionRes = data.results;
              });
    }
]);
