'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('NewCtrl', function ($scope, news, toaster, $location) {
	$scope.news = news;
	$scope.readOnly = $location.search().read == '1';
	$scope.accessTypes = [{
		_id: 'public',
		description: 'Público'
	},{
		_id: 'voluntario',
		description: 'Rol: Voluntarios'
	},{
		_id: 'staff',
		description: 'Rol: Staff'
	},{
		_id: 'dominicana',
		description: 'País: República Dominicana'
	}];
	$scope.addAccess = function(){
		$scope.news.access.push('');
	};
	$scope.removeAccess = function(index){
		$scope.news.access.splice(index, 1);
	};
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