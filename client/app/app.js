angular.module('app', ['ui.router','app.init', 'app.update', 'app.dashboard', 'app.services.factories', 'app.services.d3', 'app.charts'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        // you don't transition to this state
        abstract: true,
        templateUrl: 'app/app.html'
      });
    //redirect to login in page
    $urlRouterProvider.otherwise('app/dashboard');
  })
  .run(function() {
    // TODO: auth

  });
