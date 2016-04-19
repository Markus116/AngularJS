'use strict';

(function(){
   angular.module('testApp').controller('loginCtrl',['credentialFactory','$scope','$location',initLoginCtrl]);

   function initLoginCtrl(credentialFactory,$scope,$location){
      console.log('loginCtrl',credentialFactory);
      $scope.factory = credentialFactory;
      $scope.login = function(){
         var isLoginValid = false;
         for (var i = 0; i < $scope.factory.credentials.length; i++) {
            var cred = $scope.factory.credentials[i];
            if(cred.name === $scope.factory.user.name && cred.pass === $scope.factory.user.pass){
               isLoginValid = true;
               break;
            }
         }
         $scope.factory.user = new UserVO(0,"","");

         if(isLoginValid){
            $location.url('/content');
         }
         console.log("login is valid",isLoginValid);
      }
   }
})();
