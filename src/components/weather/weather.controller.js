(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['weatherService'];

    function WeatherCtrl(weatherService) {
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