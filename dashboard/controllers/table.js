/**
 * Controller for table
 */

app.controller('tableCtrl', function($scope) {
  $scope.playerName = '';
  $scope.players = {};
  $scope.activeRoles = [];
  $scope.showTooMany = false;
  $scope.reps = [playersRep, activeRolesRep];

  $scope.addPlayer = function() {
    $scope.showTooMany = (Object.keys(playersRep.value).length >= 8);
    if (!$scope.showTooMany){
      playersRep.value[newID()] = {name: $scope.playerName, role: ''}
      $scope.playerName = '';
    }
  };

  $scope.removePlayer = function(playerId) {
    delete playersRep.value[playerId];
    $scope.showTooMany = false;
  };

  $scope.assignRole = function(playerId, role) {
    playersRep.value[playerId].role = role;
  };

  $scope.deal = function() {
    var roles = shuffle($scope.activeRoles.slice());
    Object.entries($scope.players).forEach(function(entry) {
      $scope.players[entry[0]].role = roles.pop();
    });

  };

  $scope.reps.forEach(function(replicant) {
    replicant.on('change', (newValue, oldValue) => {
      $scope.$apply();
    });
  });

  nodecg.listenFor('deal', $scope.deal);

  NodeCG.waitForReplicants(...$scope.reps).then(() => {
    $scope.players = playersRep.value;
    $scope.activeRoles = activeRolesRep.value;
    $scope.$apply();
  });
});
