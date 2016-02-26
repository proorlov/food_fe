(function () {

  'use strict';

  angular
    .module('food.ItemsService', [])
    .service('ItemsService', ItemsService);

  ItemsService.$inject = ['$http'];

  function ItemsService($http) {

    this.getItems = function(filter) {
      if(filter) {

      }
      else {
        var data = [
          {images: {
            exppath: "",
            realpath: ""
          },
            user: {
              name: "Adam",
              avatar: "img/adam.jpg"
            },
            title: "My new food",
            description: "It's kind of description"
          },
          {
            images: {
              exppath: "",
              realpath: ""
            },
            user: {
              name: "Ben",
              avatar: "img/ben.png"
            },
            title: "New food",
            description: "It's kind of description"
          }
        ];
      }

      return data;
    };


  }
})();


