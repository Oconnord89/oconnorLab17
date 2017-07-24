var app= angular.module('myModule');

app.controller('outputCtrl', function($scope, redditFactory) {

  $scope.posts=redditFactory.getJson();
  console.log($scope.posts);


});
