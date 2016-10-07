routerApp
  .controller('bookedCtrl', function($scope, $stateParams, mainSrv){
    $scope.id = $stateParams.id;
    $scope.selectPackage = mainSrv.travelInfo;
    for(var i = 0; i < $scope.selectPackage.length; i++){
      if($scope.selectPackage[i].id == $scope.id){
        $scope.info = $scope.selectPackage[i];
      }
    }
    $scope.bgdImage = {
      'background-image': 'url('+$scope.info.image+')'
    };
});
