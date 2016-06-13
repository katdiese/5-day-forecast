(function() {

  'use strict';

  angular
    .module('weatherApp')
    .service('weatherService', weatherService);

  weatherService.$inject = ['$http'];

  function weatherService($http) {

    return {

      getWeather: function(cityName) {
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',us&units=imperial&APPID=3c438ab921656e7189ededb4dbb9bb82');
      }

    }

  }

})();