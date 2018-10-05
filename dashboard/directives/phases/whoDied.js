/**
 * Directive for the who died game phase
 */

'use strict';

app.directive('whoDied', function() {
  var controller = ['$scope', function ($scope) {
        $scope.players = {};
        $scope.rolesKilled = [];
        $scope.winners = ['Werewolf', 'Tanner', 'Villager'];
        $scope.toggle = toggle;

        $scope.victory = function(winner) {
          var wolfKilled = $scope.rolesKilled.some(function(role) {
            return role.includes('Werewolf');
          });
          var tannerKilled = $scope.rolesKilled.includes('Tanner');
          var wasWolf = Object.entries($scope.players).some(function(entry) {
            return entry[1].role.includes('Werewolf');
          });
          if (winner === 'Villager') {
            return wolfKilled || (!wasWolf && $scope.rolesKilled.length == 0);
          } else if (winner === 'Tanner') {
            return tannerKilled;
          } else if (winner === 'Werewolf') {
            return !(wolfKilled || tannerKilled) && wasWolf;
          }
        };

        $scope.endGame = function() {
          $scope.rolesKilled = [];
          $scope.next();
        }

        playersRep.on('change', (newValue, oldValue) => {
          $scope.$apply();
        });

        NodeCG.waitForReplicants(playersRep).then(() => {
          $scope.players = playersRep.value;
          $scope.$apply();
        });
      }]
  return {
    scope: {
      next: '&'
    },
    restrict: 'E',
    templateUrl: 'views/who-died.html',
    controller: controller
  };
});
