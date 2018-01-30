angular.module( 'userService', [] )

.service('userService', function () {
  this.userId = null;

  this.getUserId = function () {
    return this.userId;
  };

  this.setUserId = function (newId) {
    this.userId = newId;
  };

});