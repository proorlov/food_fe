(function (angular) {

  'use strict';

  angular
    .module('food.AddPostCtrl', [])
    .controller('AddPostCtrl', AddPostCtrl);

  AddPostCtrl.$inject = ['Camera', 'appService'];

  function AddPostCtrl(Camera, AppService) {
    var addPostCtrl = this;
    addPostCtrl.selectedCountry = {};
    addPostCtrl.countries = AppService.getCities();



    addPostCtrl.newPost = {
      expectationURI: "",
      realityURI: "",
      description: "",
      cityId: "",
      userId: "",
      placeId: ""
    };

    // Add new photo
    addPostCtrl.addNewPhoto = function(type) {
      Camera.getPicture().then(function(imageURI) {
        addPostCtrl.imageURI = imageURI;
      }, function(err) {
        console.err(err);
        addPostCtrl.imageURI = err;
      });
    }
  }

})(angular);


