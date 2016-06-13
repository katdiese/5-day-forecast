(function() {

  'use strict';

  angular
    .module('weatherApp')
    .config(appConfig);

  appConfig.$inject = ['$routeProvider'];

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<landing></landing>'
      })
  }

})();