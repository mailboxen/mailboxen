angular.module('app.loading', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.loading', {
        url: '/loading',
        templateUrl: 'app/loading/loading.html'
      });
  })
  .controller(function(){
    // TODO:
  })
  .run(function() {
    // TODO:
  });
