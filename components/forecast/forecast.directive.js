(function() {

  'use strict';

  angular
    .module('weatherApp')
    .directive('forecast', forecast);

  function forecast() {
    return {
      restrict: 'E',
      templateUrl: 'components/forecast/forecast.view.html',
      controller: 'ForecastCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();