angular.module( 'mainMenu', [] )

.directive( 'mainMenu', ['$location', function(location) {
  return {
    scope: {},
    replace: true,
    link: function(scope, element, attributes) {

        scope.menu = [
            {label: 'Home', sref: 'home'},
            {label: 'About', sref: 'about'},
            {label: 'Test', submenu: [
                {label: 'Test1', sref: 'test1'},
                {label: 'Test2', sref: 'test2'}
            ]}
        ];

        scope.isActive = function (viewLocation) {
            return viewLocation === location.path();
        };

    },
    templateUrl: "directives/mainMenu/mainMenu.tpl.html"
  };
}]);
