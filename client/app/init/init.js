angular.module('app.init', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.init', {
        url: '/init',
        templateUrl: 'app/init/init.html'
      });
  })
  .controller(function(){
    // TODO:
  })
  .run(function() {
    // TODO:
  });
