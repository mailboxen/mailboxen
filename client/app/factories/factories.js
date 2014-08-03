angular.module('app.factories', [])
  .factory('UtilFactory', function($http, $state) {
    var isServerInitialized = function() {
      return $http.get({
        method: 'GET',
        url: '/user'
      }).then(function(resp) {
        return resp.data;
      }).catch(function(err) {
        throw err;
      });
    };

    var submitConfigData = function(obj) {
      return $http({
          method: 'POST',
          url: '/config',
          data: JSON.stringify(obj)
        })
        .then(function(resp) {
          $state.go('app.dashboard');
        })
        .catch(function(error) {
          console.log("Errors ", error);
        });
    };
    return {
      isServerInitialized: isServerInitialized,
      submitConfigData: submitConfigData
    };
  });
