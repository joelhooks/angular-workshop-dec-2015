angular.module('ps.user-detail', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })

  .controller('UserDetailCtrl', function UserDetailCtrl($stateParams, $http) {
    var userDetail = this;
    console.log($stateParams)
    $http.get('/api/users/' + $stateParams.username).then(function(result) {
      userDetail.user = result.data;
    })
  })
;