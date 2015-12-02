angular.module('ps.user-detail', [
  'ui.router',
  'ps.user-repos',
    'ps.user-events'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail', {
        url: '/users/:username',
        templateUrl: 'user-detail/user-detail.tpl.html',
        controller: 'UserDetailCtrl as userDetail'
      })
  })

  .controller('UserDetailCtrl', function UserDetailCtrl($stateParams, userModel) {
    var userDetail = this;

    userModel.getUser($stateParams.username).then(function(user) {
      userDetail.user = user;
    })
  })
;