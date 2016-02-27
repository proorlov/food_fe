(function () {

  'use strict';

  angular
    .module('food.appService', [])
    .service('appService', AppService);

  AppService.$inject = ['$http', '$q'];

  function AppService($http, $q) {

    var self = this;
    this.cities = [];


    this.getCities = function() {
      return this.cities;
    };


    this.init = function() {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: 'http://food.codepr.ru/getCities'
      }).then(function successCallback(response) {
        self.cities = response.data;
        deferred.resolve(response.data);
      }, function errorCallback(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }



  }
})();


