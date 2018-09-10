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
      onuw: '=',
      remove: '&',
      assign: '&'
    },
    templateUrl: '../dashboard/views/player.html'
  };
});
