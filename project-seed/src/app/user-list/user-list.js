angular.module('ps.user-list', [
  'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userList', {
        url: '',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListCtrl as userList'
      })
  })
  .controller('UserListCtrl', function UserListCtrl(userModel) {
    var userList = this;

    userModel.getUsers().then(function(users) {
      userList.users = users;
    })
  })
;