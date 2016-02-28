(function (angular) {

  'use strict';

  angular
    .module('food.AddPostCtrl', [])
    .controller('AddPostCtrl', AddPostCtrl);

  AddPostCtrl.$inject = ['appService', 'ItemsService', '$cordovaCamera', '$state'];

  function AddPostCtrl(appService,  ItemsService, $cordovaCamera, $state) {
    var addPostCtrl = this;
    addPostCtrl.buttonText = 'Отправить пост';
    addPostCtrl.selectedCity = {};

    appService.init().then(function(data){
      addPostCtrl.cities = data;
    },function(error){
      addPostCtrl.error = error;
    });

    addPostCtrl.places = appService.getPlaces();
    addPostCtrl.userCity = appService.getUserCity();
    addPostCtrl.validation = false;

    addPostCtrl.newPost = {
      "userId": "10",
      "placeId": "1 ",
      "exp": '',
      "real": '',
      "description": "",
      "cityId": "10"
    };


    addPostCtrl.status = "";
    // Add new photo in exp
    addPostCtrl.addNewPhotoExp = function() {
      alert(addPostCtrl.options.destinationType);
      $cordovaCamera.getPicture().then(function(imageData) {
        addPostCtrl.newPost.exp = imageData;
      }, function(err) {
        console.err(err);
      });
    };

    // Add new photo in real
    addPostCtrl.addNewPhotoReal = function() {
      $cordovaCamera.getPicture().then(function(imageData) {
        var reader  = new FileReader();

        reader.onload = function () {
          addPostCtrl.newPost.real = reader.result;
        };
        reader.readAsDataURL(imageData);
      }, function(err) {
        console.err(err);
      });
    };


    addPostCtrl.upload = function (file) {
      console.log(file);
    };

    // Add new post
    addPostCtrl.addPost = function() { // prepare
      // new post
      addPostCtrl.buttonText = "<i class='ion-loading-c'></i>";
      ItemsService.addPost(addPostCtrl.newPost).then(function(){
        addPostCtrl.newPost = {};
        $state.go('ItemsList');
      },function(){
        addPostCtrl.buttonText = "Ошибка";
      });
    }
  }

})(angular);


