'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('ResponsesCtrl', function ($scope, $location, Response) {
	$scope.wsResponse = Response;

	$scope.fields = [{
			title : 'Nombre',
			name : 'createdBy.entity.firstName',
			type : 'text'
		},{
			title : 'Formulario',
			name : 'title',
			type : 'text'
		},{
			title : 'Fecha que completó',
			name : 'createdDate',
			type : 'date'
		}
	];

	$scope.search = [
		'_id',
		'title',
		'createdBy',
		'formId',
		'createdBy.entity',
		'createdBy.entity.firstName',
		'createdBy.entity.lastName',
		'createdDate'
	];

	$scope.createNew = function () {
		$location.path('form');
	};
});