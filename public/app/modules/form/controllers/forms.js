'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('FormsCtrl', function ($scope, $location, Form) {
	$scope.wsForm = Form;

	$scope.fields = [{
			title : 'Título',
			name : 'title',
			type : 'text'
		},{
			title : 'Fecha',
			name : 'createdDate',
			type : 'date'
		}
	];

	$scope.search = [
		'_id',
		'title',
		'createdDate'
	];

	$scope.createNew = function () {
		$location.path('form');
	};
});