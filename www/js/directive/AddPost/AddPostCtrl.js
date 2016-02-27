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
    addPostCtrl.places = AppService.getPlaces();
    addPostCtrl.userCity = AppService.getUserCity();

    addPostCtrl.newPost = {
      "userId": "10",
      "placeId": "1 ",
      "exp.jpg": "",
      "rel.jpg": "",
      "description": "",
      "cityId": "10"
    };

    // Add new photo
    addPostCtrl.addNewPhoto = function(type) {
      Camera.getPicture().then(function(imageURI) {
        addPostCtrl.newPost[type] = imageURI;
      }, function(err) {
        console.err(err);
        addPostCtrl.imageURI = err;
      });
    };

    // Add new post
    addPostCtrl.addPost = function() {
      AppService.addPost(addPostCtrl.newPost);
    }
  }

})(angular);


