var app = angular.module('FullStax');

app.controller('MainController', function($scope, mainService) {
	
	$scope.getFriends = function(){
		mainService.getFriends().then(function(response) {
				$scope.friends = response.data;
				

		});
	};

	$scope.getFamily = function(){
		mainService.getFamily().then(function(response) {
			$scope.family = response.data;
			

		});
	};

	$scope.getActivities = function() {
		mainService.getActivities().then(function(response) {
			$scope.activities = response.data;
			console.log(response.data)
		});
	};
 	$scope.addFriends = function() {
 		mainService.addFriends().then(function(response) {
 			$scope.friends = response.data;

 		});
 	};
});