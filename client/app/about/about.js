angular.module('app.about', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      });
  })
  .controller(function(){
    // TODO:
  })
  .run(function() {
    // TODO:
  });
