var app = angular.module('cheet');

app.controller('MainController', function($scope, mainService) {

	$scope.cheats = mainService.getCheats();

	$scope.insertFormula = function(item){
		console.log(item);
	}

});