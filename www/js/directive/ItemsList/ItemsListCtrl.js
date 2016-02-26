(function (angular) {

  'use strict';

  angular
    .module('food.ItemsListCtrl', [])
    .controller('ItemsListCtrl', ItemsListCtrl);

  ItemsListCtrl.$inject = ['ItemsService'];

  function ItemsListCtrl(ItemsService) {
    var itemsListCtrl = this;

    itemsListCtrl.data = ItemsService.getItems();

  }

})(angular);


