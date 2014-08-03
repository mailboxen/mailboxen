angular.module('app.factories', [])
  .factory('UserFactory', function($http) {
    var isServerInitialized = function() {
      $http.get({
        method: 'GET',
        url: '/user'
      }).then(function(resp) {
        if (resp.data) {
          return true;
        }
        return false;
      }).catch(function(err) {
        throw err;
      });
    };
    return {
      isServerInitialized: isServerInitialized
    };
  });
