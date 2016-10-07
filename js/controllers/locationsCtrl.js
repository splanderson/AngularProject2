routerApp
  .controller('locationsCtrl', function($scope, mainSrv){
    $scope.packageData = mainSrv.travelInfo;
});
