angular.module('tien.clndr', []).directive('tienClndr', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      clndr: '=tienClndrObject'
    },
    template: '<div><div class="clndr_container"></div></div>',
    controller: function($scope, $element, $attrs, $transclude) {
      return $transclude(function(clone, scope) {
        var render;
        $element.append(clone);
        render = function(data) {
          angular.extend(scope, data);
        };
        return $scope.clndr = $($element).find(".clndr_container").clndr({
          render: render
        });
      });
    }
  };
});
