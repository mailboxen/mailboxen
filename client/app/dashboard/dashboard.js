angular.module('app.dashboard', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: "app/dashboard/dashboard.html"
      });
  })
  // .controller('DashboardCtrl', function(){

  // })
  .run(function(d3Factory) {

    console.log(d3Factory.d3);
  });
