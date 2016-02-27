(function (angular) {

  'use strict';

  angular
    .module('food.footer', [])
    .directive('footer', footer);


  function footer() {

    FooterCtrl.$inject = ['$state'];

    return {
      replace: true,
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'js/directive/footer/footer.html',
      controller: FooterCtrl,
      controllerAs: 'footerCtrl'
    };


    function FooterCtrl($state) {

      var footerCtrl = this;

      footerCtrl.addPost = function() {
        $state.go('AddPost')
        console.log($state);
      }
    }
  }

})(angular);

