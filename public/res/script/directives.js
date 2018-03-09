function calendario() {
  return {
    restrict: 'E',
    controller: calendarioController,
    templateUrl: 'directives/calendario.html',
    scope: {
      dia : '=',
      mes : '='
    }
  };
}

function localidades() {
  return {
    restrict: 'E',
    controller: localidadesController,
    templateUrl: 'directives/localidades.html',
    scope: {
      cidades: '@'
    }
  }
}

function localidade() {
  return {
    restrict: 'E',
    controller: localidadeController,
    templateUrl: 'directives/localidade.html',
    scope: {
      cidade: '@'
    }
  }
}

angular.module('HojeEhDiaDeRua.directives')
  .directive('calendario', calendario)
  .directive('localidades', localidades)
  .directive('localidade', localidade);
