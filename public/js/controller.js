var app = angular.module('cheet');

app.controller('MainController', function($scope, mainService) {

	$scope.cheats = mainService.getCheats();

	$scope.insertFormula = function(item){
		console.log(item);

		Office.context.document.bindings.addFromNamedItemAsync('A1:E' + spreadsheetData.length, 'matrix', {id:'invoiceLineItems'}, function (asyncResult) {
	    if (asyncResult.status == Office.AsyncResultStatus.Succeeded) {
	      // add the data
	      Office.select('bindings#invoiceLineItems').setDataAsync(spreadsheetData, {coercionType:'matrix'}, function(asyncResult){
	      });
	    }
	  })
	}

});