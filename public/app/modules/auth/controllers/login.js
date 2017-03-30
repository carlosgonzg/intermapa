'use strict';

angular.module('IntermapaApp')
.controller('LoginCtrl', function ($scope, $rootScope, $location, User, toaster) {
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
		return _.filter($scope.states, function(doc){ return doc.countryId == country._id; });
	};
	$scope.citiesByState = function(state){
		if(state === undefined){
			return [];
		}
		return _.filter($scope.cities, function(doc){ return doc.stateId == state._id; });
	};
	//listado
	$scope.countries = [{
		_id: 1,
		description: 'República Dominicana'
	}];
	$scope.states = [{
		_id: 1,
		description: 'Santo Domingo',
		countryId: 1
	}];
	$scope.cities = [{
		_id: 1,
		description: 'Distrito Nacional',
		stateId: 1
	}];
	$scope.periods = [{
		_id: 12,
		description: 'Anual'
	},{
		_id: 6,
		description: 'Semestral'
	},{
		_id: 3,
		description: 'Trimestral'
	},{
		_id: 1,
		description: 'Intensivo'
	}];
	$scope.participantTypes = [{
		_id: 1,
		description: 'Envío'
	},{
		_id: 2,
		description: 'Hospedaje'
	}];
	$scope.programTypes = [{
		_id: 1,
		description: 'Programa Escolar'
	},{
		_id: 2,
		description: 'Programa de Adulto'
	}];
	$scope.programs = [{
		_id: 1,
		description: 'Voluntario extranjero'
	},{
		_id: 2,
		description: 'Educatores'
	},{
		_id: 3,
		description: 'Universitario'
	},{
		_id: 4,
		description: 'Otros'
	}];
	$scope.messageTypes = [{
		_id: 1,
		description: 'Correo'
	},{
		_id: 1,
		description: 'Teléfono'
	}];
});
