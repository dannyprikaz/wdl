/**
 * Controller for roles panel
 */

app.controller('rolesCtrl', function($scope) {
  $scope.roles = onuwRoles;
  $scope.activeRoles = [];

  $scope.toggle = function(role) {
    var index = $scope.activeRoles.indexOf(role);
    if ($scope.activeRoles.includes(role)) {
      $scope.activeRoles.splice(index, 1);
    } else {
      $scope.activeRoles.push(role);
    }
  }

  activeRolesRep.on('change', (newValue, oldValue) => {
    $scope.$apply();
  });

  NodeCG.waitForReplicants(activeRolesRep).then(() => {
    $scope.activeRoles = activeRolesRep.value;
    $scope.$apply();
  });
});
