angular.module('app.init', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.init', {
        url: '/init',
        // you don't transition to this state
        abstract: true,
        templateUrl: 'app/initial-setup/initial-setup.html'
      });
  })
  .controller(function(){
    // TODO:
  })
  .run(function() {
    // TODO:
  });
