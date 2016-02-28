(function (angular) {

  'use strict';

  angular
    .module('food.ItemsListCtrl', [])
    .controller('ItemsListCtrl', ItemsListCtrl);

  ItemsListCtrl.$inject = ['ItemsService', 'appService', '$rootScope'];

  function ItemsListCtrl(ItemsService, AppService, $rootScope) {
    var itemsListCtrl = this;

    itemsListCtrl.domain = 'http://food.codepr.ru';
    itemsListCtrl.data = [];
    itemsListCtrl.viewLoadMore = true;


    // initial data
    ItemsService.getItems().then(function(resp){
        itemsListCtrl.data = resp;
    },function(resp){
      itemsListCtrl.data = resp;
    });


    $rootScope.$on('updateDataArray', function() {
      itemsListCtrl.data = ItemsService.getLocalItems()
    });

    // load more posts
    itemsListCtrl.loadMore = function() {
     ItemsService.getItems().then(function(resp){
        if(resp) {
          itemsListCtrl.data = resp;
        }
        else {
          itemsListCtrl.viewLoadMore = false;
        }
      },function(resp){
        itemsListCtrl.data = resp;
      });
    };


    // Init app
    AppService.init();
    AppService.defineCity();
  }

})(angular);


