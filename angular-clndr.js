
/*!
 * angular-clndr 0.2.0
 * 10KB, http://10kb.nl/
 * License: MIT
 */

(function() {
  var module;

  module = angular.module('tien.clndr', []);

  module.directive('tienClndr', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        clndr: '=tienClndrObject',
        events: '=tienClndrEvents'
      },
      controller: ["$scope", "$element", "$attrs", "$transclude", function($scope, $element, $attrs, $transclude) {
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
      }]
    };
  });

}).call(this);
