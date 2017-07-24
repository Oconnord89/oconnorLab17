var app = angular.module('myModule');

app.factory('redditFactory', function($http) {

    var posts = [];

    return {
      setJson: setJson,
      getJson: getJson
    }

    function getJson() {
      return posts;
}

    function setJson(subReddit) {
      $http ({
        method: 'GET',
        url:'https://www.reddit.com/r/' + subReddit + '.json'
      })
      .then(function successfulCallback(response) {
        console.log(response);
        posts = response.data.data.children;
        return posts;
      });

      

    }
});
