'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('NewCtrl', function ($scope, news, toaster, $location, List, $timeout) {
	$scope.news = news;
	$scope.readOnly = $location.search().read == '1';
	
	$scope.save = function () {
		$scope.news.save()
		.then(function (data) {
			toaster.success('El mensaje fue guardado de manera exitosa');
			$location.path('news');
		},
			function (error) {
			console.log(error);
			toaster.error(error.message);
		});
	};
});