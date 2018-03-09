angular.module('HojeEhDiaDeRua.controllers')
  .controller('mainController', mainController);

function mainController($scope) {
  $scope.title = "Hoje é Dia de Rua";

  $scope.dia = 0;
  $scope.mes = "";

  $scope.localidades = [];

  $scope.init = () => {
    $scope.dia = 9;
    $scope.mes = "Março";
    
    $scope.localidades.push({ nome: "Campinas", uf: "SP", latitude: 0.0, longitude: 0.0 });
    $scope.localidades.push({ nome: "São Paulo", uf: "SP", latitude: 0.0, longitude: 0.0 });
    $scope.localidades.push({ nome: "Barueri", uf: "SP", latitude: 0.0, longitude: 0.0 });
    $scope.localidades.push({ nome: "Araras", uf: "SP", latitude: 0.0, longitude: 0.0 });
  }
}
