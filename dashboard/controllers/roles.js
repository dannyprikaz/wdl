/**
 * Controller for roles panel
 */

app.controller('rolesCtrl', function($scope) {
  $scope.roles = onuwRoles;
  $scope.activeRoles = [];
  $scope.players = {};
  $scope.reps = [activeRolesRep, playersRep];

  $scope.toggle = function(role) {
    var index = $scope.activeRoles.indexOf(role);
    if ($scope.activeRoles.includes(role)) {
      $scope.activeRoles.splice(index, 1);
    } else {
      $scope.activeRoles.push(role);
    }
  }

  $scope.objectElementCount = function(obj) {
    return Object.entries(obj).length;
  }

  $scope.reps.forEach(function(rep) {
    rep.on('change', (newValue, oldValue) => {
      $scope.$apply();
    });
  });

  NodeCG.waitForReplicants(...$scope.reps).then(() => {
    $scope.activeRoles = activeRolesRep.value;
    $scope.players = playersRep.value;
    $scope.$apply();
  });
});
