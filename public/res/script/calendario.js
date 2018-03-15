angular.module('HojeEhDiaDeRua.controllers')
  .controller('calendarioController', calendarioController)

function calendarioController($scope) {

  $scope.browse = true;
  $scope.editar = false;

  $scope.meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  $scope.monthIndex = 0;

  $scope.init = () => {
    for(var i = 0; i < $scope.meses.length; i++) {
      if($scope.meses[i] == $scope.mes) {
        $scope.monthIndex = i;
      }
    }
  }

  $scope.next = () => {
    $scope.dia ++;
    if($scope.dia > 31) {
      $scope.dia = 1;
      $scope.monthIndex++;
      if($scope.monthIndex > 11) {
        $scope.monthIndex = 1;
      }
      $scope.mes = $scope.meses[$scope.monthIndex];
    }
  };

  $scope.previous = () => {
    $scope.dia--;
    if($scope.dia == 0) {
      $scope.dia = 31;
      $scope.monthIndex--;
      if($scope.monthIndex == 0) {
        $scope.monthIndex = 12;
      }
      $scope.mes = $scope.meses[$scope.monthIndex];
    }
  };

  $scope.edit = () => {
    toggle();
  };

  $scope.save = () => {
    toggle();
  }

  $scope.today = () => {
    $scope.dia = 9;
    $scope.mes = "Março";
    toggle();
  }

  var toggle = () => {
    $scope.browse = !$scope.browse ;
    $scope.editar = !$scope.editar;
  }

  $scope.share = shareon => {

  }
}
