angular.module('ps.models.user-model', [])

  .service('userModel', function UserModel($http, baseApiUrl) {
    var userModel = this;

    userModel.getUser = function(username) {
      return $http.get(baseApiUrl + '/users/' + username).then(function (result) {
        return result.data;
      })
    };

    userModel.getUsers = function() {
      return $http.get(baseApiUrl + '/users').then(function (results) {
        //do work on data
        return results.data;
      })
    }
  })
;