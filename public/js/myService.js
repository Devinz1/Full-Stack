var app = angular.module('FullStax');

app.service('mainService', function($http) {
	this.getFriends = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/friends'
		});
	};

	this.getFamily = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/family'
		});
	};

	this.getActivities = function() {
		return $http({
			method: 'GET',
			url: 'http://localhost:3000/activities'
		});
	};
     this.addFriends = function() {
     	return $http({
     		method: 'POST',
     		url: 'http://localhost:3000/friends'
     	});
     };
})