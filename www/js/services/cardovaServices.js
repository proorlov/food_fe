(function (angular) {

  'use strict';


  angular
    .module('food.Camera', [])
    .factory('Camera', ['$q', function ($q) {

    return {
      getPicture: function (options) {
        var q = $q.defer();

        console.log(navigator);

        navigator.camera.getPicture(function (result) {
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }, options);

        return q.promise;
      }
    }
  }]);

})(angular);
