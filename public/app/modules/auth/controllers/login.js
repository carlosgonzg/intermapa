'use strict';

angular.module('IntermapaApp')
.controller('LoginCtrl', function ($scope, $rootScope, $location, User) {
	$rootScope.userData = new User();
	$scope.login = function () {
		$rootScope.userData.login()
		.then(function (data) {
			$location.path($rootScope.roleOptions[0].option.url)
		}, function (err) {});
	};
	$scope.forgetPassword = function(){
		$rootScope.userData.forgetPassword();
	};
});
