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
			title : 'Nombre',
			name : 'entity.firstName',
			type : 'text'
		},{
			title : 'Apellido',
			name : 'entity.lastName',
			type : 'text'
		}, {
			title : 'Email',
			name : 'account.email',
			type : 'text'
		}, {
			title : 'Rol',
			name : 'role.description',
			type : 'text'
		}
	];

	$scope.search = [
		'_id',
		'entity',
		'entity.firstName',
		'entity.lastName',
		'account.email',
		'role.description'
	];

	$scope.createNew = function () {
		$location.path('user');
	};
});
