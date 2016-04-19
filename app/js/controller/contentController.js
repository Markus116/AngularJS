'use strict';

(function(){
    angular.module('testApp').controller('contentCtrl',['contentFactory','$scope','$location',initContentController]);

    function initContentController(contentFactory,$scope,$location){
        console.log('contentCtrl',credentialFactory);
        $scope.factory = contentFactory;
    }
})();
