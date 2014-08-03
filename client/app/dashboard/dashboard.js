angular.module('app.dashboard', [])
  .controller('DashboardCtrl', function($scope, $timeout) {
    $scope.chartTypes = ['pie', 'bar', 'line', 'point', 'area'];
    $scope.chartType = 'bar';
    $timeout(function() {
      $scope.data1 = {
        series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
        data: [{
          x: "Sales",
          y: [100, 500, 0],
          tooltip: "this is tooltip"
        }, {
          x: "Not Sales",
          y: [300, 100, 100]
        }, {
          x: "Tax",
          y: [351]
        }, {
          x: "Not Tax",
          y: [54, 0, 879]
        }]
      };
    }, 100);

    $scope.data2 = {
      series: ['<em>500</em> Keyboards', '<em>105</em> Laptops', '<em>100</em> TVs'],
      data: [{
        x: "Sales",
        y: [100, 500, 0],
        tooltip: "this is tooltip"
      }, {
        x: "Income",
        y: [300, 100, 100]
      }, {
        x: "Expense",
        y: [351, 50, 25]
      }]
    };


    $scope.config1 = {
      labels: false,
      title: "Products",
      legend: {
        display: true,
        position: 'left'
      },
      innerRadius: 0
    };

    $scope.config2 = {
      labels: false,
      title: "HTML-enabled legend",
      legend: {
        display: true,
        htmlEnabled: true,
        position: 'right'
      },
      lineLegend: 'traditional'
    }

  })
  .run(function() {

  })

  .config(function($stateProvider) {
  $stateProvider
    .state('app.dashboard', {
      url: '/dashboard',
      templateUrl: "app/dashboard/dashboard.html",
      controller: "DashboardCtrl"
    });
});
