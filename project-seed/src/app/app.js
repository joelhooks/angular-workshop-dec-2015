angular.module('project-seed', [
  'ps.user-detail',
  'ps.user-list',
  'project-seed.common',
  'ngAria',
  'templates-app',
  'ui.router'
])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/users');
  })
;