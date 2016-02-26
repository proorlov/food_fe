(function () {

  'use strict';

  angular
    .module('food.ItemsService', [])
    .service('ItemsService', ItemsService);

  ItemsService.$inject = ['$http'];

  function ItemsService($http) {

    this.data = [];
    this.state = 0;

    this.getItems = function(filter) {
      if(filter) {

      }
      else {
        $http({
          method: 'GET',
          url: 'http://food.codepr.ru/getList?count=10&id=' + this.state
        }).then(function successCallback(response) {
          this.data = response;
        }, function errorCallback(response) {
          this.data = response;
        });
      }

      //return data;
      return this.data;
    };


  }
})();


