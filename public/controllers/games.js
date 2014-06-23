angular.module('MyApp')
  .controller('GamesCtrl', ['$scope', 'Game', '$routeParams', function($scope, Game, $routeParams) {

    $scope.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    $scope.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];

    $scope.headingTitle = 'Top 12 Games';

    $scope.games = Game.query();

    $scope.deleteItem = function (index, gameId) {
      console.log(index);
      $scope.games.splice(index, 1);
      Game.delete({ _id: gameId });
    };

    $scope.filterByGenre = function(genre) {
      $scope.games = Game.query({ genre: genre });
      $scope.headingTitle = genre;
    };

    $scope.filterByAlphabet = function(char) {
      $scope.games = Game.query({ alphabet: char });
      $scope.headingTitle = char;
    };
  }]);

