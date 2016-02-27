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
      "exp": "",
      "rel": "",
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

      var blob = new Blob([imageBase64], {type: 'image/png'});
      var file1 = new File([blob], 'addPostCtrl.newPost.exp');
      var file2 = new File([blob], 'addPostCtrl.newPost.rel');

      addPostCtrl.newPost.exp = file1;
      addPostCtrl.newPost.rel = file2;

      AppService.addPost(addPostCtrl.newPost);
    }
  }

})(angular);


