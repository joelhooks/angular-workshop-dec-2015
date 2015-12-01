angular.module('app', [])
  .controller('AppCtrl', function($scope, $rootScope) {
    console.log($scope, $rootScope);

    $scope.message = "Hello from Controller";
    $scope.otherMessage = "some other message";
    $scope.messageObject = {
      text: 'some object message'
    }
  })
;