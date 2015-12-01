angular.module('app', [])

  .directive('titleComponent', function() {
    return {
      restrict: 'E',
      scope: {
        text: '@' // string ATTRIBUTE binding
      },
      template: '<h3>{{text}}</h3>'
    }; // directive definition object (DDO)
  })

  .directive('personList', function() {
    return {
      restrict: 'E',
      scope: {
        people: '='
      },
      template: '<person-card ng-repeat="person in app.people" person="person"></person-card>'
    }
  })

  .directive('personCard', function() {
    return {
      restrict: 'E',
      scope: {
        person: '=', // two-way OBJECT binding
        doStuff: '&' // expression binding
      },
      template: '<div ng-click="doStuff({name: person.firstName})">{{person.firstName}} {{person.lastName}} - {{person.email}}</div>'
    }; // directive definition object (DDO)
  })

  .controller('AppCtrl', function() {
    var app = this;
    app.myTitle = "This title is sophisticated!";

    app.sayHello = function(name) {
      console.log('hello ' + name);
    };

    app.sayGoodbye = function(name) {
      console.log('goodbye ' + name );
    };

    app.person = {
      firstName: 'Joel',
      lastName: 'Hooks',
      email: 'joel@egghead.io'
    };

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