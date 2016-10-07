routerApp
  .controller('packagesCtrl', function($scope, $stateParams, mainSrv){
      $scope.packageData = mainSrv.travelInfo;
});
