'use strict';

adopteitorApp.controller('GalgosEnAdopcion', ['$scope', '$location',
    function ($scope, $location) {
        $scope.galgosEnAdopcion = [
                {"id": 1, "nombre": "Galgo 1", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":2},
                {"id": 2, "nombre": "Galgo 2", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":4},
                {"id": 3, "nombre": "Galgo 3", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":6},
                {"id": 4, "nombre": "Galgo 4", "sexo":"macho", "desc":"dasdasdasdasdasdasdasdad", "edad":6}
              ];
    }
]);
