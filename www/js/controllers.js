angular.module('starter.controllers', [])
.controller('OrderCtrl', function($scope) {})
.controller('MyCtrl', function($scope) {})
.controller('MainNextCtrl', function($scope, Foods) {
  $scope.foodmenus = Foods.cleardata();
})
.controller('MainCtrl', function($scope, Foods) {
  $scope.foodmenus = Foods.all();
})
.controller('MainDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.id);
})