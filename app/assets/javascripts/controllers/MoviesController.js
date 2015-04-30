(function(){

  angular
    .module('materialize')
    .controller('MoviesController', MoviesController);

    MoviesController.$inject = ['$http'];

    function MoviesController($http){
      var self = this;

      self.searchMovie = function(){
        $http.get('http://www.omdbapi.com/?t=' + self.movie + '&y=&plot=short&r=json').success(function(data, status, headers, config){
          console.log(data);
        }).error(function(data, status, headers, config){
          console.log(data);
        });
      };
    }

})();
