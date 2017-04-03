'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:ResponseCtrl
 * @description
 * # ResponseCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('ResponseCtrl', function ($scope, response, $location, toaster) {
	$scope.response = response;

	$scope.save = function () {
		$scope.response.save()
		.then(function (data) {
			toaster.success('El formulario fue guardado de manera exitosa');
			$location.path('/');
		},
			function (error) {
			toaster.error('Error al guardar, favor intente mas tarde');
		});
	};
});