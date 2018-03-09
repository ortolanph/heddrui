angular.module('HojeEhDiaDeRua.controllers')
  .controller('socialDropDownController', socialDropDownController)
  
function socialDropDownController($scope) {
  $scope.dropdownVisible = false;
  
  $scope.toggleDropDown = () => {
    $scope.dropDownVisible = !$scope.dropDownVisible;      
  };
  
  $scope.share = shareon => {
    console.log(shareon);
  }
}