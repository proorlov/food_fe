(function () {

  'use strict';

  angular
    .module('food.ItemsService', [])
    .service('ItemsService', ItemsService);

  ItemsService.$inject = ['$http', '$q'];

  function ItemsService($http, $q) {

    var self = this;
    this.data = [];
    this.state = null;

    this.getItems = function(filter) {

      var deferred = $q.defer();
      if(filter) {

      }
      else {
        var url = self.state == null ? 'http://food.codepr.ru/getList?count=2' : 'http://food.codepr.ru/getList?count=2&id=' + self.state;


        $http({
          method: 'GET',
          url: url
        }).then(function successCallback(response) {
          self.state = response.data[response.data.length-1].id;
          self.data = self.data.concat(response.data);

          deferred.resolve(self.data);
        }, function errorCallback(response) {
            //self.data = response.data;
          deferred.reject(response);
        });
      }

      return deferred.promise;
    };


  }
})();


