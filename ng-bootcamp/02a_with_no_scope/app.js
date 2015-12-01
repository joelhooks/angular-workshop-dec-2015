angular.module('app', [])
  .controller('AppCtrl', function() {
    var app = this;
    app.message = "Hello from Controller";
    app.otherMessage = "some other message";
    app.messageObject = {
      text: 'some object message'
    }
  })
;