angular.module('app', [])
  .controller('AppCtrl', function() {
    var app = this;

    app.addFruitToList = function(newFruit) {
      app.fruits.push(newFruit);
      app.newFruit = '';
    };

    app.fruits = [
      'Apples',
      'Oranges',
      'Bananas',
      'Pears',
      'Pineapples',
      'Skittles'
    ]
  })
;