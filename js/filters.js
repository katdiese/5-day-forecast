(function() {

  'use strict';

  angular
    .module('weatherApp')
    .filter('timeOnly', timeOnly)
    .filter('dateOnly', dateOnly);

    function dateOnly() {
      return function(input) {
        return input.slice(0,10);
      }
    }

    function timeOnly() {
      return function(input) {
        return input.slice(11,16);
      }
    }

})();