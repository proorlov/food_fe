(function (angular) {

  'use strict';

  angular
    .module('food.AddPostCtrl', [])
    .controller('AddPostCtrl', AddPostCtrl);

  AddPostCtrl.$inject = ['Camera'];

  function AddPostCtrl(Camera) {
    console.log(Camera);
    var addPostCtrl = this;
    addPostCtrl.addNewPhoto = function() {
      Camera.getPicture().then(function(imageURI) {
        console.log(imageURI);
      }, function(err) {
        console.err(err);
      });
    }
  }

})(angular);


