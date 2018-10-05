/**
 * Directive for the assign roles game phase
 */

'use strict';

app.directive('assignRoles', function() {
  var controller = ['$scope', function ($scope) {

    $scope.deal = function() {
      var roles = shuffle(activeRolesRep.value.slice());
      Object.keys(playersRep.value).forEach(function(key) {
        playersRep.value[key].role = roles.pop();
      });
    };
  }],

  template = '<h2>Assign Roles</h2>' +
             '<button ng-click="deal()">Deal</button>'
  return {
    restrict: 'E',
    controller: controller,
    template: template
  };
});
