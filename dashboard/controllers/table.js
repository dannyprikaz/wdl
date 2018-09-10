/**
 * Controller for table
 */

app.controller('tableCtrl', function($scope) {
  $scope.playerName = '';
  $scope.players = {};
  $scope.onuw = onuwRoles;

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

  NodeCG.waitForReplicants(playersRep).then(() => {
    $scope.players = playersRep.value;
    $scope.$apply();
  });
});
