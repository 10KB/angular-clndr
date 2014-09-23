angular.module('tien.clndr', []).directive('tienClndr', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      clndr: '=tienClndrObject'
    },
    controller: function($scope, $element, $attrs, $transclude) {
      return $transclude(function(clone, scope) {
        var render;
        $element.append(clone);
        render = function(data) {
          angular.extend(scope, data);
        };
        return $scope.clndr = angular.element("<div/>").clndr({
          render: render
        });
      });
    }
  };
});
