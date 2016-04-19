'use strict';

(function (){
    angular.module('testApp').factory('credentialFactory',['$http',initCredentialFactory]);

    function initCredentialFactory($http){
        console.log("credentialFactory");
        var service = {};

        $http.get('json/credentials.json')
            .success(function successFn(res) {
                service.credentials = res;
            })
            .error(function errorFn(res) {
                service.credentials = {};
            });

        service.user = new UserVO(0,"test1","test1");
        console.log("service",service);
        return service;
    }
})();
