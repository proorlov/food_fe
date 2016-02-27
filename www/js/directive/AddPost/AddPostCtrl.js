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
      "real": "",
      "description": "",
      "cityId": "10"
    };

    addPostCtrl.tempSrcImage = {
      exp: "",
      real: ""
    };

    addPostCtrl.status = "";

    // Add new photo
    addPostCtrl.addNewPhoto = function(type) {
      Camera.getPicture().then(function(imageURI) {
        addPostCtrl.tempSrcImage[type] = imageURI;
      }, function(err) {
        console.err(err);
      });
    };

    // Add new post
    addPostCtrl.addPost = function() {

      var blob = new Blob([imageBase64], {type: 'image/jpg'});
      var file1 = new File([blob], addPostCtrl.tempSrcImage.exp);
      var file2 = new File([blob], addPostCtrl.tempSrcImage.real);

      addPostCtrl.status = "Send!";

      addPostCtrl.newPost.exp = file1;
      addPostCtrl.newPost.real = file2;

      AppService.addPost(addPostCtrl.newPost);
    }
  }

})(angular);


