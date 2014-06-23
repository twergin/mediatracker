angular.module('MyApp')
  .controller('GameDetailCtrl', ['$scope', '$rootScope', '$routeParams', 'Game', 'Subscription',
    function($scope, $rootScope, $routeParams, Game, Subscription) {
      Game.get({ _id: $routeParams.id }, function(game) {
        $scope.game = game;
      });
    }]);