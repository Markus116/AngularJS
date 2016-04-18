'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('testApp', [
  'ngRoute',
  'testApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
