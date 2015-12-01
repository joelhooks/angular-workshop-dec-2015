angular.module('app', [])

  .directive('titleComponent', function() {
    return {
      restrict: 'E',
      template: '<h1>This is my rad title!!1!</h1>'
    }; // directive definition object (DDO)
  })

  .controller('AppCtrl', function() {
    var app = this;

  })
;