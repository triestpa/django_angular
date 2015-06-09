(function () {

  angular
    .module('thinkster', [
      'thinkster.config',
      'thinkster.routes',
      'thinkster.authentication',
      'thinkster.layout',
      'thinkster.posts',
      'thinkster.utils',
      'thinkster.profiles'
    ]);

  angular
    .module('thinkster.routes', ['ngRoute']);

  angular
    .module('thinkster.config', [])


  angular
    .module('thinkster')
    .run(run);

  run.$inject = ['$http'];

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }


})();
