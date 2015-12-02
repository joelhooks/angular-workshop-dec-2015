describe('UserList', function() {
  var userList,
    userModel;

  beforeEach(module('ps.user-list'));
  beforeEach(inject(function($controller) {
    userModel = {
      wasCalled: false,
      getUsers: function () {
        this.wasCalled = true;
        return {
          then: function () {
          }
        }
      }
    };
    userList = $controller('UserListCtrl', {
      userModel: userModel
    });
  }));

  it('should create an instance', function() {
    expect(userList).toBeDefined();
  });

  it('should call getUsers on the userModel', function() {
    expect(userModel.wasCalled).toBe(true);
  })
});