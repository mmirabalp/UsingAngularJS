/**
*  Module
*
* Description
*/
var app = angular.module('myApp', []);
app.controller('displayCtrl', ['$scope', function ($scope) {
	$scope.names = "Mawel";
	$scope.newComment = {};
	$scope.comments = [
		{
			comment : "Good Work",
			userName: "Mawel"
		},
		{	
			comment : "Bad Work",
			userName: "Julio"
		},
		
	];
	$scope.addComments = function(){
		$scope.comments.push($scope.newComment);
		$scope.newComment = {};
	}
	
}])