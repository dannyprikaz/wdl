/**
 * Directive for the who died game phase
 */

'use strict';

app.directive('whoDied', function() {
  var template = '<h2>Who died?</h2>' +
                 '<div style="display:inline-block;margin:10px" ng-repeat="(key, player) in players">' +
                 '<h3>{{player.name}}</h3>' +
                 '</div>' +
                 '<button ng-click="next()">Next</button>',

      controller = ['$scope', function ($scope) {
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
    template: template,
    controller: controller
  };
});
