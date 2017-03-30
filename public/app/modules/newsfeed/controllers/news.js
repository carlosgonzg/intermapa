'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('NewsCtrl', function ($scope, $location, News) {
	$scope.wsNews= News;

	$scope.fields = [{
			title : 'Título',
			name : 'title',
			type : 'text'
		},{
			title : 'Fecha',
			name : 'date',
			type : 'date'
		}
	];

	$scope.search = [
		'_id',
		'title',
		'date'
	];

	$scope.createNew = function () {
		$location.path('new');
	};
});