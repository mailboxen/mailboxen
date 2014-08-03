angular.module('app.update', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.update', {
        url: '/update',
        templateUrl: 'app/update/update.html'
      });
  })
  .controller(function(){
    // TODO:
  })
  .run(function() {
    // TODO:
  });
