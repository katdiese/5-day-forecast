(function() {

  'use strict';

  angular
    .module('weatherApp')
    .directive('landing', landing);

  function landing() {
    return {
      restrict: 'E',
      templateUrl: 'components/landing/landing.view.html',
      controller: 'LandingCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();