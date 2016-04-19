'use strict';

(function(){
    angular.module("testApp").factory('contentFactory',['$http',initContentFactory]);

    function initContentFactory($http){
        console.log("contentFactory");
        var service = {};

        $http.get('json/content.json')
            .success(function successFn(res){
                service.contentCollection = res;
            })
            .error(function errorFn(res){
                service.contentCollection = {};
            });

        console.log("contentFactory",service);
        return service;
    }
})();
