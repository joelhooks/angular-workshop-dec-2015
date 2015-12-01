angular.module('app', [])
  .controller('AppCtrl', function() {
    var app = this;
    app.people = [
      {
        firstName: 'Joel',
        lastName: 'Hooks',
        email: 'joel@egghead.io'
      },
      {
        firstName: 'Billy',
        lastName: 'Wunderson',
        email: 'billy@example.com'
      },
      {
        firstName: 'Gina',
        lastName: 'Tarlington',
        email: 'gina@somemail.com'
      }
    ]
  })
;