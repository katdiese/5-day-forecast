(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('ForecastCtrl', ForecastCtrl);

    ForecastCtrl.$inject = ['weatherService'];

    function ForecastCtrl(weatherService) {
      var vm = this;

      vm.getInfo = function() {
        weatherService.getWeather('Indianapolis')
        .then(function(data) {
          console.log(data);
        })
      }

      vm.getInfo();

    }

})();