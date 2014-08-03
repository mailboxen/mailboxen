// the main app module loads two external modules (ui router, angular charts)
angular.module('app', ['ui.router', 'angularCharts', 'app.init', 'app.update', 'app.about', 'app.dashboard', 'app.loading','app.factories'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        // you don't transition to this state
        abstract: true,
        templateUrl: 'app/app.html'
      });
    //redirect to login in page
    $urlRouterProvider.otherwise('app/update');
  })
  .run(function($rootScope, $state, UtilFactory) {
    $rootScope.$on('$stateChangeStart', function(evt, next, current) {
      var user = UtilFactory.isServerInitialized();
      console.log(user);
      if (user) {
        // $state.redirect('app.update');
      } else {
        // $state.go('app.init');
      }
    });
  });
