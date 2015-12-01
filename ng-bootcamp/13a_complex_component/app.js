angular.module('app', [])

  .controller('TabsCtrl', function () {
    var tabs = this;
    tabs.registered = [];
    tabs.selectedTab = null;

    tabs.selectTab = function(tab) {
      tabs.registered.forEach(function(tab) {
        tab.selected = false;
      });

      tab.selected = true;
      tabs.selectedTab = tab;
    };

    tabs.registerTab = function (tab) {
      if(!tabs.selectedTab) {
        tabs.selectTab(tab);
      }
      tabs.registered.push(tab);
    }
  })

  .directive('tabs', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      templateUrl: 'tabs.tpl.html',
      controller: 'TabsCtrl as tabs'
    }
  })

  .directive('tab', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      transclude: true,
      require: '^tabs',
      template: '<div ng-if="selected" ng-transclude></div>',
      link: function(scope, elem, attrs, ctrl) {
        ctrl.registerTab(scope);
      }
    }
  })

  .controller('AppCtrl', function() {
    var app = this;
  })
;