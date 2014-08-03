angular.module('app.dashboard', [])
  .controller('DashboardCtrl', function($scope, $timeout) {
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
          x: 'email',
          y: [1000]
        }, {
          x: 'email2',
          y: [300]
        }, {
          x: 'email3',
          y: [700]
        }, {
          x: 'email4',
          y: [500]
        }, {
          x: 'email5',
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
          x: 'email',
          y: [3444]
        }, {
          x: 'email2',
          y: [34]
        }, {
          x: 'email3',
          y: [2344]
        }, {
          x: 'email4',
          y: [233]
        }, {
          x: 'email5',
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
        series: ['send', 'receive'],
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
  })
  .run(function() {

  })

.config(function($stateProvider) {
  $stateProvider
    .state('app.dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    });
});
