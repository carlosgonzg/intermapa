'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('EventCtrl', function ($scope, event, toaster, $location) {
	$scope.event = event;

	$scope.save = function () {
		$scope.event.save()
		.then(function (data) {
			toaster.success('El evento fue guardado de manera exitosa');
			$location.path('events');
		},
			function (error) {
			console.log(error);
			toaster.error(error.message);
		});
	};
});