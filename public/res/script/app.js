angular.module('HojeEhDiaDeRua.controllers', []);
angular.module('HojeEhDiaDeRua.filters', []);
angular.module('HojeEhDiaDeRua.directives', []);

const modules = [
    'HojeEhDiaDeRua.controllers',
    'HojeEhDiaDeRua.filters',
    'HojeEhDiaDeRua.directives',
    'ngStorage'
];

const app = angular.module('HojeEhDiaDeRuaApp', modules);
