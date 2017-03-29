'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('UserListCtrl', function ($scope, $location, User) {
	$scope.wsUser = User;

	$scope.fields = [{
			title : 'Name',
			name : 'entity.fullName',
			type : 'text'
		}, {
			title : 'Email',
			name : 'account.email',
			type : 'text'
		}, {
			title : 'Role',
			name : 'role.description',
			type : 'text'
		}
	];

	$scope.search = [
		'_id',
		'entity',
		'entity.fullName',
		'account.email',
		'role.description'
	];

	$scope.createNew = function () {
		$location.path('user');
	};
});
