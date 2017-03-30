'use strict';

angular.module('IntermapaApp')
.controller('SessionCtrl', function ($scope, $rootScope, $location, $window, User) {
	if (!$window.sessionStorage.token) {
		$rootScope.isAuthenticated = false;
		$rootScope.userData = {};
	} else {
		$rootScope.isAuthenticated = true;
		$rootScope.userData = new User(JSON.parse($window.sessionStorage.user));
		$rootScope.roleOptions = JSON.parse($window.sessionStorage.roleOptions);
		
		var user = new User();
		user.getActualUser()
		.then(function (obj) {
			$rootScope.userData = obj;
			$window.sessionStorage.user = JSON.stringify(obj);
			return $rootScope.userData.getRoleOptions();
		})
		.then(function(data){
			$rootScope.roleOptions = data;
			$window.sessionStorage.roleOptions = JSON.stringify(data);
		})
		.catch(function (error) {
			$location.path('/login');
		});
	}

	$rootScope.$on("$routeChangeStart", function () {
		if($rootScope.userData && $rootScope.userData.getAccessOfView){
			console.log($rootScope.userData.getAccessOfView());
		}
		if (!$window.sessionStorage.token && ($location.path() != '/' && $location.path() != '/login' && $location.path() != '/register' && $location.path().substr(0, 15) != "/changepassword" && $location.path().substr(0, 14) != "/confirm/email")) {
			$location.path('/login');
		}
	});
});
