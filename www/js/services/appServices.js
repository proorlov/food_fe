(function () {

  'use strict';

  angular
    .module('food.appService', [])
    .service('appService', AppService);

  AppService.$inject = ['$http', '$q'];

  function AppService($http, $q) {

    var self = this;

    this.cities = [];
    this.places = [];
    this.user = {
      city: ""
    };

    // Get cities
    this.getCities = function() {
      return this.cities;
    };

    // Get
    this.getUserCity = function() {
      return this.user.city;
    };

    // Get places for current city
    this.getPlaces = function() {
      return this.places;
    };

    // New post
    this.addPost = function(data) {
      var deferred = $q.defer();

      var tempData =  angular.toJson(data);

      $http({
        method: 'POST',
        url: 'http://food.codepr.ru/addPost',
        data: tempData
      }).then(function successCallback(response) {
        self.cities = response.data;
        deferred.resolve(response.data);
      }, function errorCallback(response) {
        deferred.reject(response);
      });

      return deferred.promise;
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
    };

    // Define city of user
    this.defineCity = function() {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: 'https://freegeoip.net/json/'
      }).then(function successCallback(response) {
         self.user.city = response.data.city;
         deferred.resolve(response);
      }, function errorCallback(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    }




  }
})();


