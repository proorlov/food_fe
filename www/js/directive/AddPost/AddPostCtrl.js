(function (angular) {

  'use strict';

  angular
    .module('food.AddPostCtrl', ['ngFileUpload'])
    .controller('AddPostCtrl', AddPostCtrl);

  AddPostCtrl.$inject = ['appService', '$cordovaCamera'];

  function AddPostCtrl(AppService, $cordovaCamera, ngFileUpload) {
    var addPostCtrl = this;

    addPostCtrl.selectedCountry = {};
    addPostCtrl.countries = AppService.getCities();
    addPostCtrl.places = AppService.getPlaces();
    addPostCtrl.userCity = AppService.getUserCity();
    var Camera = '';
    addPostCtrl.options = {};

    addPostCtrl.newPost = {
      "userId": "10",
      "placeId": "1 ",
      "exp": false,
      "real": false,
      "description": "",
      "cityId": "10"
    };


    addPostCtrl.status = "";
    addPostCtrl.options = {
      quality: 10,
      destinationType: 0
    };

    // Add new photo in exp
    addPostCtrl.addNewPhotoExp = function() {
      alert(addPostCtrl.options.destinationType);
      $cordovaCamera.getPicture(addPostCtrl.options).then(function(imageData) {
        addPostCtrl.newPost.exp = imageData;
      }, function(err) {
        console.err(err);
      });
    };

    // Add new photo in real
    addPostCtrl.addNewPhotoReal = function() {
      $cordovaCamera.getPicture(addPostCtrl.options).then(function(imageData) {
        var reader  = new FileReader();

        reader.onload = function () {
          addPostCtrl.newPost.real = reader.result;
        };
        reader.readAsDataURL(imageData);
      }, function(err) {
        console.err(err);
      });
    };

    // Add new photo from local storage of user
    addPostCtrl.addLocalPhoto = function(type) {
      var fileActive;


      if(type === "exp") {
        angular.element('#file-exp').click();
      }
      else {
        angular.element('#file-real').click();
      }

    };

    addPostCtrl.upload = function (file) {
      console.log(file);
    };



    // Add new post
    addPostCtrl.addPost = function() {

      console.log(addPostCtrl.newPost);

    }
  }

})(angular);


