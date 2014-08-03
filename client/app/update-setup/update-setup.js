angular.module('app.update', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.update', {
        url: '/update',
        // you don't transition to this state
        abstract: true,
        templateUrl: 'app/update-setup/update-setup.html'
      });
  })
  .controller(function(){
    // TODO:
  })
  .run(function() {
    // TODO:
  });
