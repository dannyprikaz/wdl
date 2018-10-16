/**
 * Directive for player
 */

'use strict';

app.directive('player', function() {
  return {
    restrict: 'E',
    scope: {
      panel: '@',
      key: '@',
      player: '=',
      active: '=',
      remove: '&',
      noTrail: '&'
    },
    templateUrl: '../dashboard/views/player.html'
  };
});
