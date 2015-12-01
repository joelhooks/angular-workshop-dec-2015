angular.module('app', [])

  .directive('clickListener', function() {
    return {
      restrict: 'A',
      link: function postLink(scope, elem, attrs) {
        console.log(scope, elem, attrs);

        elem.on('click', function() {
          console.log('SAYYYYY HEEYYYYYYY ', Math.random());
          scope.message = Math.random();
          scope.$digest();
          elem.toggleClass('alert-danger');
        })
      }
    }; // directive definition object (DDO)
  })

  .directive('simple', function() {
    return function postLink() {
      console.log('nothing useful in here... ', Math.random());
    }
  })

  .controller('AppCtrl', function() {
    var app = this;

  })
;