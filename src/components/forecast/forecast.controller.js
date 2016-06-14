(function() {

  'use strict';

  angular
    .module('weatherApp')
    .controller('ForecastCtrl', ForecastCtrl);

    ForecastCtrl.$inject = ['$rootScope','weatherService'];

    function ForecastCtrl($rootScope, weatherService) {
      var vm = this;

    }

})();