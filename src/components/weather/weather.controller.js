(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['$rootScope', 'weatherService'];

    function WeatherCtrl($rootScope, weatherService) {
      var vm = this;

      vm.cityName;
      // vm.day1Forecast;
      // vm.day2Forecast;
      // vm.day3Forecast;
      // vm.day4Forecast;
      // vm.day5Forecast;

      vm.getInfo = function() {
        weatherService.getWeather($rootScope.city)
        .then(function(data) {
          console.log(data);
          vm.cityName = data.data.city.name;
          var fullForecast = data.data.list;
          vm.day1Forecast = fullForecast.slice(0,7);
          vm.day2Forecast = fullForecast.slice(7,15);
          vm.day3Forecast = fullForecast.slice(15,23);
          vm.day4Forecast = fullForecast.slice(23,31);
          vm.day5Forecast = fullForecast.slice(31,39);
          console.log('day 5 ', vm.day5Forecast);
        })
      }

      vm.getInfo();

    }

})();