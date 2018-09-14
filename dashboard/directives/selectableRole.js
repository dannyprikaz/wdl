/**
 * Directive for selectable role cards
 */

'use strict';

app.directive('selectableRole', function() {
  return {
    restrict: 'E',
    scope: {
      role: '@',
      active: '=',
      toggle: '&'
    },
    templateUrl: '../dashboard/views/selectable-role.html',
  };
});
