angular.module('app', [])
  .controller('AppCtrl', function() {
    var app = this;
    app.message = "Hello from Controller";

    app.updateMessage = function(newMessage) {
      app.message = newMessage;
    }
  })
;