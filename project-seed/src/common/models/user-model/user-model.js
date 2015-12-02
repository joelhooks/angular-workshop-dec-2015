angular.module('ps.models.user-model', [])

  .service('userModel', function UserModel($http) {
    var userModel = this;

    userModel.getUsers = function() {
      return $http.get('/api/users').then(function (results) {
        //do work on data
        return results.data;
      })
    }
  })
;