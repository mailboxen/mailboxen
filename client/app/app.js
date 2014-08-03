// the main app module loads two external modules (ui router, angular charts)
angular.module('app', ['ui.router', 'angularCharts', 'app.init', 'app.update', 'app.about', 'app.dashboard'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        // you don't transition to this state
        abstract: true,
        templateUrl: 'app/app.html'
      });
    //redirect to login in page
    $urlRouterProvider.otherwise('app/init');
  })
  .run(function() {
    // TODO: auth

  });
