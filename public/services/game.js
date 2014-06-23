angular.module('MyApp')
  .factory('Game', ['$resource', function($resource) {
    return $resource('/api/games/:_id');
}]);