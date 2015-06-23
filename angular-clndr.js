
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
      events: '=tienClndrEvents',
      options: '=?tienClndrOptions'
    };
    controller = [
      "$scope", "$element", "$attrs", "$transclude", function($scope, $element, $attrs, $transclude) {
        return $transclude(function(clone, scope) {
          var options, render;
          $element.append(clone);
          $scope.$watch('events', function(val) {
            return $scope.clndr.setEvents(angular.copy(val || []));
          });
          render = function(data) {
            return angular.extend(scope, data);
          };
          options = angular.extend($scope.options || {}, {
            render: render
          });
          return $scope.clndr = angular.element("<div/>").clndr(options);
        });
      }
    ];
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
