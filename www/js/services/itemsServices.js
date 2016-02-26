(function () {

  'use strict';

  angular
    .module('food.ItemsService', [])
    .service('ItemsService', ItemsService);

  ItemsService.$inject = ['$http', '$q'];

  function ItemsService($http, $q) {

    var self = this;
    this.data = [];
    this.state = 0;

    this.getItems = function(filter) {

      var deferred = $q.defer();
      if(filter) {

      }
      else {
        $http({
          method: 'GET',
          url: 'http://food.codepr.ru/getList?count=10'
        }).then(function successCallback(response) {
          //self.data = response.data;
          deferred.resolve(response.data);
        }, function errorCallback(response) {
            //self.data = response.data;
          deferred.reject(response);
        });
      }

      return deferred.promise;
    };


  }
})();


