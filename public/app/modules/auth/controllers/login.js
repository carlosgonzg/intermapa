'use strict';

angular.module('IntermapaApp')
.controller('LoginCtrl', function ($scope, $rootScope, $location, User, toaster, List) {
	$rootScope.userData = new User();
	$scope.login = function () {
		$rootScope.userData.login()
		.then(function (data) {
			$location.path('/')
		}, function (err) {});
	};
	$scope.forgetPassword = function(){
		$rootScope.userData.forgetPassword();
	};
	$scope.register = function(){
		$rootScope.userData.role = {
			_id: 4,
			description: 'Estudiante'
		}
		$rootScope.userData.register()
		.then(function(){
			$scope.showRegister = false;
			toaster.success('','El usuario fue creado de manera exitosa, ya puedes entrar al sistema.');
		}, function(err){
			console.log(err);
			toaster.error('', 'Error al registrar usuario, favor tratar más tarde');
		});
	};
	$scope.changeToRegister = function(){
		$scope.showRegister = true;
	};
	$scope.statesByCountry = function(country){
		if(country === undefined){
			return [];
		}
		return _.filter($scope.list.states, function(doc){ return doc.countryId == country._id; });
	};
	$scope.citiesByState = function(state){
		if(state === undefined){
			return [];
		}
		return _.filter($scope.list.cities, function(doc){ return doc.stateId == state._id; });
	};
	//listado
	$scope.list = List;
});
