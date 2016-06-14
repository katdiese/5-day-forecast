(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['$rootScope', 'weatherService'];

    function WeatherCtrl($rootScope, weatherService) {
      var vm = this;

      vm.cityName;
      vm.day1Forecast = [];

      vm.getInfo = function() {
        weatherService.getWeather($rootScope.city)
        .then(function(data) {
          var fullForecast = data.data.list;
          var currDate = fullForecast[0].dt_txt.slice(0,10);
          var num = 0;
          var startingNum;

          vm.cityName = data.data.city.name;
          while(fullForecast[num].dt_txt.slice(0,10) === currDate) {
            vm.day1Forecast.push(fullForecast[num]);
            var startingNum = num;
            num++;
          }
          vm.day2Forecast = fullForecast.slice(num,num+=8);
          vm.day3Forecast = fullForecast.slice(num,num+=8);
          vm.day4Forecast = fullForecast.slice(num,num+=8);
          vm.day5Forecast = fullForecast.slice(num,num+=8);
        })
      }

      vm.getInfo();

    }

})();