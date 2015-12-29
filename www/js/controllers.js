angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope) {})
.controller('MainCtrl2', function($scope, $http) {
    $http.get("1.test5.php")
    .success(function(response) {$scope.names = response.records;});
})
.controller('MainCtrl', function($scope, Foods) {
  $scope.foodmenus = Foods.all();
})
.controller('MainDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.id);
})