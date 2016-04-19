'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('testApp', [
  'ngRoute',
  'testApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/login',{
        templateUrl:'login/login.html',
        controller:'loginCtrl'
      })
      .when('/content',{
        templateUrl:'login/content.html',
        controller:'contentCtrl'
      })
      .otherwise({redirectTo: '/login'});
}]);
