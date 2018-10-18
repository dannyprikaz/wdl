/**
 * Controller for table
 */

app.controller('tableCtrl', function($scope) {
  $scope.playerName = '';
  $scope.players = {};
  $scope.activeRoles = [];
  $scope.showTooMany = false;
  $scope.reps = [playersRep, activeRolesRep];
  $scope.noTrailingNumber = noTrailingNumber;

  $scope.addPlayer = function() {
    $scope.showTooMany = (Object.keys(playersRep.value).length >= 8);
    if (!$scope.showTooMany){
      playersRep.value[newID()] = {name: $scope.playerName, role: []}
      $scope.playerName = '';
    }
  };

  $scope.removePlayer = function(playerId) {
    delete playersRep.value[playerId];
    $scope.showTooMany = false;
  };

  $scope.reps.forEach(function(replicant) {
    replicant.on('change', (newValue, oldValue) => {
      $scope.$apply();
    });
  });

  NodeCG.waitForReplicants(...$scope.reps).then(() => {
    $scope.players = playersRep.value;
    $scope.activeRoles = activeRolesRep.value;
    $scope.$apply();
  });
});
