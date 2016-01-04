'use strict';

/* App Module */

var adopteitorApp = angular.module('adopteitorApp', [
	'config',
	'ngCookies',
	'ngRoute',
	'angular-ui',
	'ui.bootstrap'
])  .config(function ($routeProvider) {
    $routeProvider.
          when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            resolve: {
              authenticated: ['djangoAuth', function(djangoAuth){
                return djangoAuth.authenticationStatus();
              }],
            }
          }).
          when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'LogoutCtrl',
            resolve: {
              authenticated: ['djangoAuth', function(djangoAuth){
                return djangoAuth.authenticationStatus();
              }],
            }
          }).
          when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'AdminCtrl',
          }).
		  when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
          }).
          when('/libraries/:libraryId', {
            templateUrl: 'views/library-detail.html',
            controller: 'LibraryDetailCtrl',
            resolve: {
              authenticated: ['djangoAuth', function(djangoAuth){
                return djangoAuth.authenticationStatus(true);
              }],
            }
          }).
          when('/viewers/:libraryId', {
            templateUrl: 'views/viewers.html',
            controller: 'ViewerCtrl',
            resolve: {
              authenticated: ['djangoAuth', function(djangoAuth){
                return djangoAuth.authenticationStatus();
              }],
            }
          }).
          otherwise({
            redirectTo: '/'
          });
  })
  .run(function(djangoAuth, ENV){
    djangoAuth.initialize(ENV['apiEndpoint']+'rest-auth', false);
  });
