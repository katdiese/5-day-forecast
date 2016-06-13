(function() {

  'use strict';

  angular
    .module('weatherApp')
    .directive('weather', weather);

  function weather() {
    return {
      restrict: 'E',
      templateUrl: 'components/weather/weather.view.html',
      controller: 'WeatherCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  }

})();