'use strict';

angular.module('testApp').factory('credentialFactory',function($http){
    console.log("credentialFactory");
    var service = {};
    $http.get('json/credentials.json')
        .then(function (res) {
            service.credentials = res.data;
        });

    service.user = new UserVO(0,"","");
    console.log("service",service);
    return service;
});