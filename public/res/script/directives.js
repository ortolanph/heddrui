function diames() {
  return {
    restrict: 'E',
    controller: diaMesController,
    templateUrl: 'directives/diames.html'
  };
}

function socialDropDown() {
  return {
    restrict: 'E',
    controller: socialDropDownController,
    templateUrl: 'directives/dropdown.html'
  };
}

angular.module('HojeEhDiaDeRua.directives')
  .directive('diames', diames)
  .directive('socialDropDown', socialDropDown);
