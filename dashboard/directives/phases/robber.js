/**
 * Directive for the robber game phase
 */

'use strict';

app.directive('robber', function() {
  var controller = ['$scope', function ($scope) {
        $scope.players = {};
        $scope.playerRobbed = [];
        $scope.toggle = toggle;

        $scope.arrayEmpty = function() {
          return $scope.playerRobbed.length < 1;
        }

        $scope.rob = function() {
          if ($scope.playerRobbed) {
            var roleTaken = $scope.playerRobbed[0].role,
                nameOfVictim = $scope.playerRobbed[0].name;
            Object.entries(playersRep.value).forEach(function(entry) {
              if (entry[1].role == 'Robber'){
                entry[1].role = roleTaken;
              } else if (entry[1].name == nameOfVictim) {
                entry[1].role = 'Robber';
              }
            });
            $scope.playerRobbed = [];
          }
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
    templateUrl: 'views/robber.html',
    controller: controller
  };
});
