
/*!
 * angular-clndr 0.3.0
 * 10KB, http://10kb.nl/
 * License: MIT
 */

(function() {
  var TienClndrDirective, module;

  module = angular.module('tien.clndr', []);

  TienClndrDirective = function() {
    var controller, scope;
    scope = {
      clndr: '=tienClndrObject',
      events: '=tienClndrEvents'
    };
    controller = function($scope, $element, $attrs, $transclude) {
      return $transclude(function(clone, scope) {
        var render;
        $element.append(clone);
        $scope.$watch('events', function(val) {
          if (val != null ? val.length : void 0) {
            return $scope.clndr.setEvents(angular.copy(val));
          }
        });
        render = function(data) {
          return angular.extend(scope, data);
        };
        return $scope.clndr = angular.element("<div/>").clndr({
          render: render
        });
      });
    };
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: scope,
      controller: controller
    };
  };

  module.directive('tienClndr', TienClndrDirective);

}).call(this);
