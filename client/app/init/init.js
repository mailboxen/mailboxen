angular.module('app.init', [])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.init', {
        url: '/init',
        templateUrl: 'app/init/init.html',
        controller: 'InitCtrl'
      });
  })
  .controller('InitCtrl', function($scope) {
    // TODO:
    var options = {
      'aws': false,
      'do': false
    };

    $scope.selectProvider = function(provider) {
      if (options && !options[provider]) {
        for (var option in options) {
          if (option !== provider) {
            // make sure everything else gets false
            options[option] = false;
          }
        }
        options[provider] = true;
      } else {
        options[provider] = false;
      }
    };

    $scope.isProviderSelected = function(provider) {
      return options[provider];
    };
  })
  .run(function() {
    // TODO:
  });
