(function (angular) {
  'use strict';
  angular
    .module('food.filter', [])
    .controller('FilterCtrl', FilterCtrl);

  FilterCtrl.$inject = ['appService'];

  function FilterCtrl(appService) {
    var filterCtrl = this;
    filterCtrl.error = '';

    appService.init().then(function(data){
      filterCtrl.cities = data;
    },function(error){
      filterCtrl.error = error;
    });
  }

})(angular);


