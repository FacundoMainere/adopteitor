'use strict';

var adopteitorApp = angular.module('adopteitorApp', ['ui.router']);


adopteitorApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider


        .state('admin', {
            url: '/admin',
            abstract:true,
            templateUrl: 'views/admin.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
        })
        .state('mision', {
            url: '/mision',
            templateUrl: 'views/mision.html'
        })
        .state('rescatados', {
            url: '/rescatados',
            templateUrl: 'views/rescatados.html'
        })
        .state('historias', {
            url: '/historias',
            templateUrl: 'views/historias.html'
        })
        .state('shop', {
            url: '/shop',
            templateUrl: 'views/shop.html'
        })
        .state('contacto', {
            url: '/contacto',
            templateUrl: 'views/contacto.html'
        })
        .state('donaciones', {
            url: '/donaciones',
            templateUrl: 'views/donaciones.html'
        });

        $urlRouterProvider.otherwise('/home');

});
