angular.module( 'ngBoilerplate.login', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login?' }
  });
})

.controller( 'LoginCtrl', function LoginCtrl( $scope, $location, userService ) {

  $scope.doLogin = function(){
    userService.setUserId(1);
    $location.path( "/about" );
  };

})

;
