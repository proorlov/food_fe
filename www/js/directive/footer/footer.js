(function (angular) {

  'use strict';

  angular
    .module('food.footer', [])
    .directive('footer', footer);


  function footer() {

    FooterCtrl.$inject = [];

    return {
      replace: true,
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'js/directive/footer/footer.html',
      controller: FooterCtrl,
      controllerAs: 'footerCtrl'
    };


    function FooterCtrl(ItemsListCtrl) {

      var footerCtrl = this;

      footerCtrl.addPost = function() {

      }
    }
  }

})(angular);

