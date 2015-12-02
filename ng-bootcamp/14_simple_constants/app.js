angular.module('app', [])

  .constant('MY_NAME', {
    name: 'Bob Anderson'
  })

  .controller('AppCtrl', function(MY_NAME) {
    var app = this;
    console.log(MY_NAME)
  })

  .directive('simple', function(MY_NAME) {
    return function() {
      console.log(MY_NAME)
    }
  })
;

window.myName = "whatever"