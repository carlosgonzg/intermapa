'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('UserCtrl', function ($scope, $window, $location, toaster, user, roles, $timeout) {
	$scope.user = user;
	$scope.roles = roles.data || [];

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
	$scope.statesByCountry = function(country){
		if(country === undefined)
			return [];
		return _.filter($scope.states, function(doc){ return doc.countryId == country._id; });
	};
	$scope.citiesByState = function(state){
		if(state === undefined)
			return [];
		return _.filter($scope.cities, function(doc){ return doc.stateId == state._id; });
	};
	
	$scope.save = function () {
		if (!$scope.user._id) {
			$scope.user.account.password = angular.copy($scope.user.account.email);
			$scope.user.entity.fullName = $scope.user.entity.firstName + ' ' + $scope.user.entity.lastName;
			$scope.user.register()
			.then(function (data) {
				toaster.success('The user was registered successfully');
				$location.path('users')
			},
				function (error) {
				console.log(error);
				toaster.error(error.message);
			});
		} else {
			$scope.user.update()
			.then(function (data) {
				toaster.success('The user was updated successfully');
				$location.path('users');
			},
				function (error) {
				console.log(error);
				toaster.error(error.message);
			});
		}
	};

});
