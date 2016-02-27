(function (angular) {

  'use strict';

  angular
    .module('food.ItemsListCtrl', [])
    .controller('ItemsListCtrl', ItemsListCtrl);

  ItemsListCtrl.$inject = ['ItemsService', 'appService'];

  function ItemsListCtrl(ItemsService, AppService) {
    var itemsListCtrl = this;

    itemsListCtrl.domain = 'http://food.codepr.ru';

    // initial data
    ItemsService.getItems().then(function(resp){
      itemsListCtrl.data = resp;
    },function(resp){
      itemsListCtrl.data = resp;
    });


    // load more posts
    itemsListCtrl.loadMore = function() {
     ItemsService.getItems().then(function(resp){
        itemsListCtrl.data = resp;
      },function(resp){
        itemsListCtrl.data = resp;
      });
    }


    // Init app
    AppService.init();
  }

})(angular);


