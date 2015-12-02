describe('UserModel', function() {
  var userModel,
    $httpBackend,
    allUsers;

  beforeEach(module('ps.models.user-model', {
    baseApiUrl: '/api'
  }));

  beforeEach(inject(function(_userModel_, _$httpBackend_) {
    userModel = _userModel_;
    $httpBackend = _$httpBackend_;

    setupMocks();
  }));

  it('should create an instance', function() {
    expect(userModel).toBeDefined();
  });

  it('should load the users when getUsers is called', function() {
    userModel.getUsers().then(function() {
      expect(allUsers.length).toBeGreaterThan(0);
    });

    $httpBackend.flush();
  });

  function setupMocks() {
    jasmine.getJSONFixtures().fixturesPath = 'base/data/users/';
    allUsers = getJSONFixture('default.json');

    $httpBackend.whenGET('/api/users').respond(allUsers);
  }
});