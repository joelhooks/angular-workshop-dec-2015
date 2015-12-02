angular.module('ps.user-events', [
    'ui.router'
])
  .config(function($stateProvider) {
    $stateProvider
      .state('userDetail.userEvents', {
        url: '/events',
        templateUrl: 'user-detail/user-events/user-events.tpl.html',
        controller: 'UserEventsCtrl as userEvents'
      })
  })

  .controller('UserEventsCtrl', function($http, $stateParams, baseApiUrl) {
    var userEvents = this;

    console.log('user events', $stateParams)

    $http.get(baseApiUrl + '/users/' + $stateParams.username + '/events').then(function(result) {
      console.log(result);
      userEvents.events = result.data;
    })
  })
;