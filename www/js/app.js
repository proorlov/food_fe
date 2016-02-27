
angular.module('food', [
  'ionic',
  'angucomplete-alt',
  'food.ItemsService',
  'food.appService',
  'food.AuthCtrl',
  'food.ItemsListCtrl',
  'food.footer',
  'food.AddPostCtrl',
  'food.Camera',
  'food.filter'
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


    .state('ItemsList', {
      url: '/',
      templateUrl: 'js/directive/ItemsList/ItemsList.html',
      controller: 'ItemsListCtrl',
      controllerAs: 'itemsListCtrl'
    })

    .state('Auth', {
      url: '/login',
      templateUrl: 'js/directive/Auth/Auth.html',
      controller: 'AuthCtrl',
      controllerAs: 'authCtrl'
    })

    .state('addPost', {
      url: '/addPost',
      templateUrl: 'js/directive/AddPost/AddPost.html',
      controller: 'AddPostCtrl',
      controllerAs: 'addPostCtrl'
    })

    .state('filter', {
      url: '/filter',
      templateUrl: 'js/directive/filter/filter.html',
      controller: 'FilterCtrl',
      controllerAs: 'filterCtrl'
    });




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
