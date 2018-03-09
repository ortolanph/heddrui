angular.module('HojeEhDiaDeRua.controllers')
  .controller('diaMesController', diaMesController)

function diaMesController($scope) {
  $scope.diames = {};
  $scope.diames.dia = 1;
  $scope.diames.mes = 1;

  $scope.diamesOld = $scope.diames;

  $scope.browse = true;
  $scope.editar = false;

  $scope.next = () => {
    $scope.diames.dia ++;
    if($scope.diames.dia > 31) {
      $scope.diames.dia = 1;
      $scope.diames.mes++;
      if($scope.diames.mes > 12) {
        $scope.diames.mes = 1;
      }
    }
  };

  $scope.previous = () => {
    $scope.diames.dia--;
    if($scope.diames.dia == 0) {
      $scope.diames.dia = 31;
      $scope.diames.mes--;
      if($scope.diames.mes == 0) {
        $scope.diames.mes = 12;
      }
    }
  };

  $scope.edit = () => {
    console.log("edit");
    toggle();
  };

  $scope.share = () => {
    console.log("share");
  };

  $scope.save = () => {
    toggle();
  }

  $scope.cancel = () => {
    console.log($scope.diamesOld);
    console.log($scope.diames);
    $scope.diames = $scope.diamesOld;
    console.log($scope.diamesOld);
    console.log($scope.diames);
    toggle();
  }

  var toggle = () => {
    $scope.browse = !$scope.browse ;
    $scope.editar = !$scope.editar;
  }
}
