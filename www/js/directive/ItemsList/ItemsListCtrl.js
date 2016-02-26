(function (angular) {

  'use strict';

  angular
    .module('food.ItemsListCtrl', [])
    .controller('ItemsListCtrl', ItemsListCtrl);

  ItemsListCtrl.$inject = ['ItemsService', '$location'];

  function ItemsListCtrl(ItemsService, $location) {
    var itemsListCtrl = this;
    itemsListCtrl.domain = 'http://food.codepr.ru';
    ItemsService.getItems().then(function(resp){
      itemsListCtrl.data = resp;
      console.log(resp);
    },function(resp){
      itemsListCtrl.data = resp;
      console.log(resp);
    });

    itemsListCtrl.loadMore = function() {
      itemsListCtrl.data = ItemsService.getItems();
    }

  }

})(angular);


