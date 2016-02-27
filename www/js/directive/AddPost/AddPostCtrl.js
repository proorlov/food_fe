(function (angular) {

  'use strict';

  angular
    .module('food.AddPostCtrl', [])
    .controller('AddPostCtrl', AddPostCtrl);

  AddPostCtrl.$inject = ['appService', '$cordovaCamera'];

  function AddPostCtrl(AppService, $cordovaCamera) {
    var addPostCtrl = this;

    addPostCtrl.selectedCountry = {};
    addPostCtrl.countries = AppService.getCities();
    addPostCtrl.places = AppService.getPlaces();
    addPostCtrl.userCity = AppService.getUserCity();
    var Camera = '';

    addPostCtrl.newPost = {
      "userId": "10",
      "placeId": "1 ",
      "exp": "",
      "real": "",
      "description": "",
      "cityId": "10"
    };


    addPostCtrl.status = "";

    if(Camera) {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation:true
      };
    }

    // Add new photo in exp
    addPostCtrl.addNewPhotoExp = function() {
      $cordovaCamera.getPicture(options).then(function(imageData) {
        addPostCtrl.newPost.exp = imageData;
      }, function(err) {
        console.err(err);
      });
    };

    // Add new photo in real
    addPostCtrl.addNewPhotoReal = function() {
      $cordovaCamera.getPicture(options).then(function(imageData) {
        addPostCtrl.newPost.real = imageData;
      }, function(err) {
        console.err(err);
      });
    };



    // Add new post
    addPostCtrl.addPost = function() {
      //
      //var blob = new Blob([imageBase64], {type: 'image/jpg'});
      //var file1 = new File([blob], addPostCtrl.tempSrcImage.exp);
      //var file2 = new File([blob], addPostCtrl.tempSrcImage.real);


      alert(addPostCtrl.newPost.exp);
      alert(addPostCtrl.newPost.real);

      addPostCtrl.status = "Send!";

      //addPostCtrl.newPost.exp = file1;
      //addPostCtrl.newPost.real = file2;

      AppService.addPost(addPostCtrl.newPost);
    }
  }

})(angular);


