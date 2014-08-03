// the main app module loads two external modules (ui router, angular charts)
angular.module('app', ['ui.router', 'angularCharts', 'app.init', 'app.update', 'app.about', 'app.dashboard', 'app.loading', 'app.factories'])
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
  .run(function($rootScope, $http, $state, UtilFactory) {
    $rootScope.$on('$stateChangeStart', function(evt, next, current) {
      UtilFactory.userExists()
        .then(function(user) {
          if (!user) {
            // if user doesn't exist
            // redirect to the init
            $state.go('app.init');
          }else{
            $rootScope.user = user;
          }
        });
    });
  });
