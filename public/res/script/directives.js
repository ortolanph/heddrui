function calendario() {
  return {
    restrict: 'E',
    controller: calendarioController,
    templateUrl: 'directives/calendario.html',
    scope: {
      dia : '=',
      mes : '='
    },
  };
}

function localidades() {
  return {
    restrict: 'E',
    templateUrl: 'directives/localidades.html',
    scope: {
      cidades: '=',
    },
  };
}

function localidade() {
  return {
    restrict: 'E',
    templateUrl: 'directives/localidade.html',
    scope: {
      cidade: '=',
    },
  };
}

function rodape() {
  return {
    restrict: 'E',
    templateUrl: 'directives/rodape.html'
  }
}


angular.module('HojeEhDiaDeRua.directives')
  .directive('calendario', calendario)
  .directive('localidades', localidades)
  .directive('localidade', localidade)
  .directive('rodape', rodape);
