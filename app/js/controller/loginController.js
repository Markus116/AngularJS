'use strict';

angular.module('testApp').controller('loginCtrl',function(credentialFactory,$location){
   console.log('loginCtrl');
   this.factory = credentialFactory;

   this.login = function(){
      var isLoginValid = false;
      for (var i = 0; i < this.factory.credentials.length; i++) {
         var cred = this.factory.credentials[i];
         if(cred.name === this.factory.user.name && cred.pass === this.factory.user.pass){
            isLoginValid = true;
            break;
         }
      }
      this.factory.user = new UserVO(0,"","");

      if(isLoginValid){
         $location.url('/content');
      }
      //window.location = "index.html#/content";

      console.log("login is valid",isLoginValid);
   }
});
