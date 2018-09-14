/**
 * Controller for table
 */

app.controller('tableCtrl', function($scope) {
  $scope.playerName = '';
  $scope.players = {};
  $scope.activeRoles = [];

  $scope.addPlayer = function() {
    playersRep.value[newID()] = {name: $scope.playerName, role: ''}
    $scope.playerName = '';
  };

  $scope.removePlayer = function(playerId) {
    delete playersRep.value[playerId];
  };

  $scope.assignRole = function(playerId, role) {
    playersRep.value[playerId].role = role;
  };

  playersRep.on('change', (newValue, oldValue) => {
    $scope.$apply();
  });

  activeRolesRep.on('change', (newValue, oldValue) => {
    $scope.$apply();
  });

  NodeCG.waitForReplicants(playersRep).then(() => {
    $scope.players = playersRep.value;
    $scope.$apply();
  });

  NodeCG.waitForReplicants(activeRolesRep).then(() => {
    $scope.activeRoles = activeRolesRep.value;
    $scope.$apply();
  });
});
