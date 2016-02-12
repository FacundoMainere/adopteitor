'use strict';

angular.module('config', [])
  .constant('ENV', {
    'name': 'development',
    'apiEndpoint': 'http://localhost:8000/',
    'viewerURL': 'http://localhost:8002/'
    // Staging
    //'apiEndpoint': 'http://socialdomo.herokuapp.com/',
    //'viewerURL': 'http://socialdomo.enbanquito.com.ar/viewers/'
  });
