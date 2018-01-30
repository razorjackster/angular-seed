angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.login',
  'ui.router',
  'ui.bootstrap',
  'mainMenu',
  'userService'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, $locationProvider ) {
  //$locationProvider.html5Mode({ enabled: true, requireBase: false });
  $urlRouterProvider.otherwise( '/login' );
})

.run( function run () {

})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, userService ) {

  $scope.showMainMenu = false;

  $scope.$on('$locationChangeSuccess', function(event, toState){
    $scope.showMainMenu = toState.split('/').pop() == 'login' ? false : true;
  });

  $scope.$on('$locationChangeStart', function(event, toState){
    if (!userService.getUserId()) {
      $location.path( "/login" );
    }
  });

})

;

