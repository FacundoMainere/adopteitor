'use strict';

adopteitorApp.factory('enAdopcion', ['$resource', function($resource){
    return $resource('http://localhost:8000/enAdopcion/', null, {'query':{method: 'GET', isArray: true}});
}]);

adopteitorApp.factory('enAdopcionPorID', ['$resource', function($resource){
    return $resource(
        'http://localhost:8000/enAdopcion/:id/',
        {id:'@id'},
        {'query':{method: 'GET', isArray: false}}
    );
}]);

adopteitorApp.controller('GalgosEnAdopcion', ['$scope', '$location', 'enAdopcion', '$uibModal',
    function ($scope, $location, enAdopcion, $uibModal) {

              $scope.galgosEnAdopcion = enAdopcion.query();
              $scope.galgosEnAdopcion.$promise.then(function(data) {
                  $scope.galgosEnAdopcionRes = data.results;
              });

              $scope.saberMas = function(id){
                  $scope.id = id;
                  var modalInstance = $uibModal.open({
                      templateUrl: 'views/saber_mas.html',
                      controller: 'enAdopcionPorID',
                      scope: $scope
                  });
              }
    }
]);

adopteitorApp.controller('enAdopcionPorID', ['$scope', '$location', 'enAdopcionPorID', '$uibModal',
    function ($scope, $location, enAdopcionPorID, $uibModal) {

              $scope.enAdopcionPorID = enAdopcionPorID.query({},{'id': $scope.id});

              $scope.enAdopcionPorID.$promise.then(function(data) {
                     $scope.enAdopcion = data;
                }, function(error) {
                    console.log('error', error);
                }
          );
    }
]);
