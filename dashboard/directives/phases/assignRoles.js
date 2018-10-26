/**
 * Directive for the assign roles game phase
 */

'use strict';

app.directive('assignRoles', function() {
  var controller = ['$scope', function ($scope) {

    $scope.deal = function() {
      var roles = shuffle(activeRolesRep.value.slice());
      Object.keys(playersRep.value).forEach(function(key) {
        playersRep.value[key].role = [roles.pop()];
      });
      // rolePhases.forEach(function(rolePhase) {
      //   if(!roles.includes(rolePhase['role']) && activeRolesRep.value.includes(rolePhase['role'])) {
      //     $scope.addRolePhase({rolePhase: rolePhase['directiveName']});
      //   }
      // });
      if (!roles.includes('Troublemaker') && activeRolesRep.value.includes('Troublemaker')) {
        $scope.addRolePhase({rolePhase: 'trouble-maker'});
      }
      if (!roles.includes('Robber') && activeRolesRep.value.includes('Robber')) {
        $scope.addRolePhase({rolePhase: 'robber'});
      }
      middleRolesRep.value = roles;
      showStatsRep.value.round += 1;
      $scope.next();
    };
  }],

  template = '<h2>Assign Roles</h2>' +
             '<button ng-click="deal()">Deal</button>'
  return {
    scope: {
      next: '&',
      addRolePhase: '&'
    },
    restrict: 'E',
    controller: controller,
    template: template
  };
});
