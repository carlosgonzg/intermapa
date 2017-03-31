'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('UserCtrl', function ($scope, $window, $location, toaster, user, roles, $timeout, List) {
	$scope.user = user;
	$scope.roles = roles.data || [];
	$scope.list = List;
	
	$scope.statesByCountry = function(country){
		if(country === undefined)
			return [];
		return _.filter($scope.list.states, function(doc){ return doc.countryId == country._id; });
	};
	$scope.citiesByState = function(state){
		if(state === undefined)
			return [];
		return _.filter($scope.list.cities, function(doc){ return doc.stateId == state._id; });
	};
	
	$scope.save = function () {
		if (!$scope.user._id) {
			$scope.user.account.password = angular.copy($scope.user.account.email);
			$scope.user.entity.fullName = $scope.user.entity.firstName + ' ' + $scope.user.entity.lastName;
			$scope.user.register()
			.then(function (data) {
				toaster.success('The user was registered successfully');
				$location.path('users')
			},
				function (error) {
				console.log(error);
				toaster.error(error.message);
			});
		} else {
			$scope.user.update()
			.then(function (data) {
				toaster.success('The user was updated successfully');
				$location.path('users');
			},
				function (error) {
				console.log(error);
				toaster.error(error.message);
			});
		}
	};

});
