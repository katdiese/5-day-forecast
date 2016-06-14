(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['$rootScope', 'weatherService'];

    function WeatherCtrl($rootScope, weatherService) {
      var vm = this;

      vm.getInfo = function() {
        weatherService.getWeather($rootScope.city)
        .then(function(data) {
          console.log(data);
        })
      }

      vm.getInfo();

    }

})();