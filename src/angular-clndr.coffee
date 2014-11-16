###!
# angular-clndr 0.3.0
# 10KB, http://10kb.nl/
# License: MIT
###

module = angular.module('tien.clndr', [])

TienClndrDirective = ->
  scope =
    clndr: '=tienClndrObject'
    events: '=tienClndrEvents'

  controller = ($scope, $element, $attrs, $transclude) ->
    $transclude (clone, scope) ->
      $element.append(clone)

      # watch events from tien-clndr-events attribute
      $scope.$watch 'events', (val) ->
        $scope.clndr.setEvents(angular.copy(val)) if val?.length

      # extend all CLNDR data to scope
      render = (data) ->
        angular.extend(scope, data)

      # init CLNDR in virtual DOM-element
      $scope.clndr = angular.element("<div/>").clndr
        render: render

  return {restrict: 'E', replace: true, transclude: true, scope: scope, controller: controller}

module.directive('tienClndr', TienClndrDirective)