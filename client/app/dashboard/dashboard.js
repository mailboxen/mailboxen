angular.module('app.dashboard', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
  })
  .controller('DashboardCtrl', function($scope, $timeout) {
    // dummy data for dashboard demo
    $scope.data = [{
      type: 'pie',
      data: {
        data: [{
          x: 'Mails successfully sent',
          y: [1000],
          tooltip: 'this is tooltip'
        }, {
          x: 'Mails failed/refused',
          y: [300]
        }]
      },
      options: {
        labels: false,
        title: 'Bounce',
        legend: {
          display: true,
          position: 'left'
        },
        innerRadius: 0
      }
    }, {
      type: 'bar',
      data: {
        series: ['sent'],
        data: [{
          x: 'Alice',
          y: [1000]
        }, {
          x: 'Bob',
          y: [300]
        }, {
          x: 'Jim',
          y: [700]
        }, {
          x: 'Tom',
          y: [500]
        }, {
          x: 'DH',
          y: [200]
        }]
      },
      options: {
        labels: false,
        title: 'Top 5 sender emails',
        legend: {
          display: true,
          position: 'left'
        },
        innerRadius: 0
      }
    }, {
      type: 'bar',
      data: {
        series: ['received'],
        data: [{
          x: 'Alice',
          y: [3444]
        }, {
          x: 'Bob',
          y: [34]
        }, {
          x: 'Jim',
          y: [2344]
        }, {
          x: 'Tom',
          y: [233]
        }, {
          x: 'DH',
          y: [4344]
        }]
      },
      options: {
        labels: false,
        title: 'Top 5 receiver emails',
        legend: {
          display: true,
          position: 'left'
        },
        innerRadius: 0
      }
    }, {
      type: 'line',
      data: {
        series: ['sent', 'received'],
        data: [{
          x: 'June',
          y: [100, 500],
          tooltip: 'this is tooltip'
        }, {
          x: 'July',
          y: [300, 100]
        }, {
          x: 'Aug',
          y: [351, 300]
        }, {
          x: 'Sep',
          y: [54, 700]
        }]
      },
      options: {
        labels: false,
        title: 'Monthly overview',
        legend: {
          display: true,
          position: 'left'
        },
        innerRadius: 0
      }
    }];
  });
// .controller('WorldMapController', ['$scope', 'GeoFactory',
//   function($scope, GeoFactory) {
//     // Used for storing and provided location data to directives.
//     $scope.latAndLong = {};
//     $scope.countries = {};
//     $scope.cities = {};

//     // define amount of data to request & display
//     $scope.numberOfCountries = 15;
//     $scope.numberOfLatAndLongs = 100;
//     $scope.numberOfCities = 10;

//     // Used to display data after it is received
//     $scope.gotLL = false;
//     $scope.gotCountries = false;
//     $scope.gotCities = false;

//     // Get specified amount of Latitute & Longitude coordinates
//     $scope.getLatAndLong = function(amount) {
//       GeoFactory.getLatAndLong(amount).then(function(results) {
//         $scope.latAndLong = results.data;
//         $scope.gotLL = true;
//       }).catch(function(err) {
//         console.log(err);
//       });
//     };

//     // Get specified amount of countries
//     $scope.getCountries = function(amount) {
//       GeoFactory.getCountries(amount).then(function(results) {
//         $scope.countries = results.data;
//         $scope.gotCountries = true;
//       }).catch(function(err) {
//         console.log(err);
//       });
//     };

//     // Get specified amount of cities
//     $scope.getCities = function(amount) {
//       GeoFactory.getCities(amount).then(function(results) {
//         $scope.cities = results.data;
//         $scope.gotCities = true;
//       }).catch(function(err) {
//         console.log(err);
//       });
//     };

//     // Get Location Data
//     $scope.getLatAndLong($scope.numberOfLatAndLongs);
//     $scope.getCountries($scope.numberOfCountries);
//     $scope.getCities($scope.numberOfCities);

//   }
// ])

// .directive('worldMap', function() {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       var generateStats = function(lls) {
//         var formatedLLs = [];
//         var highestValue = 0;

//         // get highest number of torrents for the set of Longitute & Latitude
//         for (var ll in lls) {
//           if (parseInt(lls[ll]) > highestValue) {
//             highestValue = parseInt(lls[ll]); //parseInt, because value is string
//           }
//         }

//         for (ll in lls) {
//           var bubble = {
//             fillKey: 'torrents',
//             radius: maintainRatio(50, highestValue, lls[ll]), // max size of Bubbles currently 50
//             torrentsTotal: lls[ll]
//           };

//           var latAndLong = ll.split(',');
//           bubble.latitude = latAndLong[0];
//           bubble.longitude = latAndLong[1];

//           // Check to ensure if not undefined Lat & Long
//           if (latAndLong.length > 1 && latAndLong[0] !== '?' && latAndLong[1] !== '?') {
//             formatedLLs.push(bubble);
//           }
//         }

//         return formatedLLs;
//       };

//       // Limit Max Size of Bubbles & Maintain value ratio for the data set
//       var maintainRatio = function(max, highestValue, value) {
//         return Math.floor((value / highestValue) * max);
//       };

//       var map = new Datamap({
//         'element': element[0],
//         fills: {
//           defaultFill: '#ccc', // Default Color of Each Country
//           torrents: '#222' // Defaut Color of Each Bubble
//         }
//       });

//       // Generate Stats
//       var llStats = generateStats(scope.latAndLong);
//       map.bubbles(llStats, {
//         popupTemplate: function(geo, data) {
//           return '<div class="hoverinfo"> Total Number of Torrents: <strong>' +
//             data.torrentsTotal + '</strong></div>';
//         }
//       });
//     },
//   };
// });

