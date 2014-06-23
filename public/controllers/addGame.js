angular.module('MyApp')
  .controller('addGameCtrl', ['$scope', '$alert', 'Game', function($scope, $alert, Game) {
    $scope.addGame = function() {
      $alert({
            content: 'Finding your game',
            placement: 'top-center',
            type: 'success',
            duration: 5
          });
      Game.save({ gameName: $scope.gameName },
        function() {
          $scope.gameName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: 'Game has been added.',
            placement: 'top-right',
            type: 'success',
            duration: 3
          });
        },
        function(response) {
          $scope.gameName = '';
          $scope.addForm.$setPristine();
          $alert({
            content: response.data.message,
            placement: 'top-right',
            type: 'danger',
            duration: 3
          });
        });
    };
  }]);