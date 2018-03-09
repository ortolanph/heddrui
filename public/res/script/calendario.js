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

  $scope.next = () => {
    $scope.dia ++;
    if($scope.dia > 31) {
      $scope.dia = 1;
      $scope.mes++;
      if($scope.mes > 12) {
        $scope.mes = 1;
      }
    }
  };

  $scope.previous = () => {
    $scope.dia--;
    if($scope.dia == 0) {
      $scope.dia = 31;
      $scope.mes--;
      if($scope.mes == 0) {
        $scope.mes = 12;
      }
    }
  };

  $scope.edit = () => {
    toggle();
  };

  $scope.save = () => {
    toggle();
  }

  $scope.hoje = () => {
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
