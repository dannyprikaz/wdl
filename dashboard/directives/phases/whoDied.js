/**
 * Directive for the who died game phase
 */

'use strict';

app.directive('whoDied', function() {
  var controller = ['$scope', function ($scope) {
        $scope.players = {};

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
