(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = ['weatherService'];

    function LandingCtrl(weatherService) {
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