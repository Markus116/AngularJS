'use strict';

(function(){
    angular.module('testApp').controller('contentCtrl',['contentFactory','$scope',initContentController]);

    function initContentController(contentFactory,$scope){
        console.log('contentCtrl',contentFactory);
        $scope.factory = contentFactory;
    }
})();
