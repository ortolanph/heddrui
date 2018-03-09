function range() {
  return (input, total) => {
    total = parseInt(total);

    for (var i=1; i<=total; i++) {
      input.push(i);
    }

    return input;
  };
}

angular.module('HojeEhDiaDeRua.filters')
  .filter('range', range);
