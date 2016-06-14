(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['$rootScope','weatherService'];

    function LandingCtrl($rootScope, weatherService) {
      var vm = this;

      vm.currCity;

      vm.setCity = function(city) {
        weatherService.setCity(vm.currCity);
        console.log('root scope', $rootScope.city);
      }

      vm.getInfo = function() {
        weatherService.getWeather('Indianapolis')
        .then(function(data) {
          console.log(data);
        })
      }

      // vm.getInfo();

    }

})();