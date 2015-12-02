angular.module('ps.user-repos', [
    'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail.userRepos', {
        url: '/repos',
        templateUrl: 'user-detail/user-repos/user-repos.tpl.html',
        controller: 'UserReposCtrl as userRepos'
      })
  })

  .controller('UserReposCtrl', function($http, $stateParams, baseApiUrl) {
    var userRepos = this;

    console.log('user repos', $stateParams)

    $http.get(baseApiUrl + '/users/' + $stateParams.username + '/repos').then(function(result) {
      console.log(result);
      userRepos.repos = result.data;
    })
  })
;