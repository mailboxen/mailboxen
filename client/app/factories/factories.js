angular.module('app.factories', [])
  .factory('UtilFactory', function($http) {
    var isServerInitialized = function() {
      $http.get({
        method: 'GET',
        url: '/user'
      }).then(function(resp) {
        return resp.data;
      }).catch(function(err) {
        throw err;
      });
    };
    return {
      isServerInitialized: isServerInitialized
    };
  })
  // .factory('utilFactory', function(){
  //   var providers = {
  //     'aws': false,
  //     'do': false
  //   };
  //   return {
  //     providers : providers
  //   };
  // });
