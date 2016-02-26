
angular.module('food', [
  'ionic',
  'food.ItemsService',
  'food.ItemsListCtrl',
  'food.footer'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('ItemsList', {
      url: '/',
      templateUrl: 'js/directive/ItemsList/ItemsList.html',
      controller: 'ItemsListCtrl',
      controllerAs: 'itemsListCtrl'
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
