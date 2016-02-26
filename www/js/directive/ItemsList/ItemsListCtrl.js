(function (angular) {

  'use strict';

  angular
    .module('food.ItemsListCtrl', [])
    .controller('ItemsListCtrl', ItemsListCtrl);

  ItemsListCtrl.$inject = [];

  function ItemsListCtrl() {
    var itemsListCtrl = this;
    console.log("pizdec");
  }

})(angular);


