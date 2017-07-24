var app = angular.module('myModule');

app.controller('inputCtrl', function($scope, redditFactory){


    $scope.searchSubReddit = function(subReddit) {
      redditFactory.setJson(subReddit);
    }


});
