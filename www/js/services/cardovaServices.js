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
          // Do any magic you need
          q.resolve(result);
        }, function (err) {
          q.reject(err);
        }, options);

        return q.promise;
      }
    }
  }]);

})(angular);
