angular.module('app.update', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.update', {
        url: '/update',
        templateUrl: 'app/update/update.html',
        controller: 'UpdateCtrl'
      });
  })
  .controller('UpdateCtrl', function($scope, $rootScope, UtilFactory) {
    // TODO:prepopulate
    $scope.data = {};
    $scope.user = $rootScope.user;
    $scope.updateData = function() {
      // later change to put request
      UtilFactory.submitConfigData($scope.data);
    };
  })
  .run(function() {
    // TODO:
  });
