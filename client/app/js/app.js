'use strict';

var adopteitorApp = angular.module('adopteitorApp', ['ui.router']);


adopteitorApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })

        .state('about', {
            // we'll get to this in a bit
        });

});
