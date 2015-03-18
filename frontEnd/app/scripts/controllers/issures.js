'use strict';
angular.module('milfaqApp')

.controller('IssureIndexController', ['$scope', 'issuresFactory', function($scope, issuresFactory) {
    
    $scope.index = function(){
      $scope.issures = issuresFactory.index();
    };

    $scope.destroy = function(user) {
        issuresFactory.destroy({id: user.id}).$promise.then(
          //sucess
          function( data ){
            console.log( data );
            $scope.index();
          },
          //error
          function( error ){
            console.log( error );
          }
        );
    };

  $scope.index();
}]);
