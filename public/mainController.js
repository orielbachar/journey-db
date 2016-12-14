app.controller('mainController', function($scope, $http, fact){

  $scope.test = fact.test;
  $scope.add = function(){

    $http.post('/journey', {text: $scope.input}).then(function(data){
      console.log(data.data);
    });
  };
});
