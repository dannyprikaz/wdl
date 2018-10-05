/**
 * Controller for roles panel
 */

app.controller('rolesCtrl', function($scope) {
  $scope.roles = onuwRoles;
  $scope.activeRoles = [];
  $scope.toggle = toggle;

  activeRolesRep.on('change', (newValue, oldValue) => {
    $scope.$apply();
  });

  NodeCG.waitForReplicants(activeRolesRep).then(() => {
    $scope.activeRoles = activeRolesRep.value;
    $scope.$apply();
  });
});
