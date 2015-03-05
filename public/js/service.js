var app = angular.module('cheet');

app.service('mainService', function() {

	var cheats = [
		{
			name: 'add',
			text: 'A1:B1'
		},
		{
			name: 'subtract',
			text: 'somethingELSE!'
		}
	]

	this.getCheats = function(){
		return cheats;
	}

});