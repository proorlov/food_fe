(function () {

  'use strict';

  angular
    .module('food.ItemsService', [])
    .service('ItemsService', ItemsService);

  ItemsService.$inject = ['$http', '$q'];

  function ItemsService($http, $q) {

    var self = this;
    this.fictionData = [];
    this.data = [];
    this.state = null;

    this.getItems = function(filter) {

      var deferred = $q.defer();
      if(filter) {

      }
      else {
        var url = self.state == null ? 'http://food.codepr.ru/getList?count=200' : 'http://food.codepr.ru/getList?count=200&id=' + self.state;


        $http({
          method: 'GET',
          url: url
        }).then(function successCallback(response) {
          var tempId = response.data[response.data.length-1].id;

          if(tempId != 1) {
              self.state = tempId;
              self.data = self.data.concat(response.data);
          }
          else {
            return false;
          }

          deferred.resolve(self.data);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
      }

      return deferred.promise;
    };

    // New post
    this.addPost = function(data) {
      var deferred = $q.defer();

      $http({
        method: 'POST',
        url: 'http://food.codepr.ru/addPost',
        data: data
      }).then(function successCallback(response) {
        self.cities = response.data;
        deferred.resolve(response.data);
      }, function errorCallback(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    };

    this.getLocalItems = function(){
      return this.fictionData.concat(this.data)
    };

    this.fictionLoad = function (item) {
      this.fictionData.unshift(item);
    }

  }
})();


