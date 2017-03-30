'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('EventsCtrl', function ($scope, $location, Event) {
	$scope.wsEvent= Event;

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
		'description',
		'date'
	];

	$scope.createNew = function () {
		$location.path('event');
	};
});