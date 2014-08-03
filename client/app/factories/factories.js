angular.module('app.factories', [])
  .factory('UtilFactory', function($http, $state) {
    var userExists = function() {
      return $http({
        method: 'GET',
        url: '/user'
      }).then(function(resp) {
        if (resp.data) {
          return resp.data;
        }
      }).catch(function(err) {
        console.log(err);
      });
    };

    var submitConfigData = function(obj) {
      return $http({
          method: 'POST',
          url: '/config',
          data: JSON.stringify(obj)
        })
        .then(function(resp) {
          $state.go('app.loading');
        })
        .catch(function(error) {
          console.log("Errors ", error);
        });
    };
    return {
      userExists: userExists,
      submitConfigData: submitConfigData
    };
  });
