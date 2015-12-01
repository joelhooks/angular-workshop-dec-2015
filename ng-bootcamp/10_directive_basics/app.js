angular.module('app', [])

  .directive('simple', function() {
    return function postLink() {
      console.log('nothing useful in here... ', Math.random());
    }
  })

  .controller('AppCtrl', function() {
    var app = this;

  })
;