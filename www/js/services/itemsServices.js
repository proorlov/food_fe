(function () {

  'use strict';

  angular
    .module('food.itemsService', [])
    .service('itemsService', itemsService);

  itemsService.$inject = ['$http', '$q', 'config', '$stateParams', 'auth'];

  function itemsService($http, $q, config, $stateParams, auth) {

    var data = false;
    var parameter = '';
    var username = '';
    var oldUserName = null;




  }
})();
