'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('RoleListCtrl', function ($scope, Role) {
	$scope.wsRole = Role;
	$scope.fields = [
		{title: 'Description', name: 'description', required: true, type: 'text'}
	];
});
