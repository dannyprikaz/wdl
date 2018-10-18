/**
 * Directive for the troublemaker game phase
 */

'use strict';

app.directive('troubleMaker', function() {
  var controller = ['$scope', function ($scope) {
        $scope.players = {};
        $scope.rolesSwitched = [];
        $scope.toggle = toggle;

        $scope.arrayNotFull = function() {
          return $scope.rolesSwitched.length < 2;
        }

        $scope.makeTrouble = function() {
          if ($scope.rolesSwitched.length == 2) {
            var firstRole = $scope.rolesSwitched[0],
                secondRole = $scope.rolesSwitched[1];
            Object.entries(playersRep.value).forEach(function(entry) {
              if (entry[1].role[0] == firstRole){
                entry[1].role.unshift(secondRole);
              } else if (entry[1].role[0] == secondRole) {
                entry[1].role.unshift(firstRole);
              }
            });
            $scope.rolesSwitched = [];
          }
          $scope.next();
        }

        playersRep.on('change', (newValue, oldValue) => {
          $scope.$apply();
        });

        safeToSet.then(() => {
          $scope.players = playersRep.value;
          $scope.$apply();
        });
      }];
  return {
    scope: {
      next: '&'
    },
    restrict: 'E',
    templateUrl: 'views/trouble-maker.html',
    controller: controller
  };
});
