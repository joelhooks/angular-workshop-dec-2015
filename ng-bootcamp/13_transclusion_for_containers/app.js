angular.module('app', [])
  .directive('myWrapper', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: '<div class="well" ng-transclude></div>'
    }; // directive definiton object (DDO)
  })

  .controller('AppCtrl', function() {
    var app = this;
    app.message = "some content that is in app"
  })
;