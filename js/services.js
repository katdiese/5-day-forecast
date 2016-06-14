(function() {

  'use strict';

  angular
    .module('weatherApp')
    .service('weatherService', weatherService);

  weatherService.$inject = ['$http', '$rootScope'];

  function weatherService($http, $rootScope) {

    return {

      setCity: function(cityName) {
        $rootScope.city = cityName;
      },
      getWeather: function(cityName) {
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + ',us&units=imperial&APPID=3c438ab921656e7189ededb4dbb9bb82');
      }

    }

  }

})();