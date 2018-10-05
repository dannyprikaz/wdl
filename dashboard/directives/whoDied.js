/**
 * Directive for the who died game phase
 */

'use strict';

app.directive('whoDied', function() {
  var template = '<h2>Who died?</h2>' +
             '<button ng-click="next()">Next</button>'
  return {
    scope: {
      next: '&'
    },
    restrict: 'E',
    template: template
  };
});
