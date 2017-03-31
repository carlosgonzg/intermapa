'use strict';

angular.module('IntermapaApp')
.factory('List', function () {
	//listado
	this.countries = [{
		_id: 1,
		description: 'República Dominicana'
	}];
	this.states = [{
		_id: 1,
		description: 'Santo Domingo',
		countryId: 1
	}];
	this.cities = [{
		_id: 1,
		description: 'Distrito Nacional',
		stateId: 1
	}];
	this.periods = [{
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
	this.participantTypes = [{
		_id: 1,
		description: 'Envío'
	},{
		_id: 2,
		description: 'Hospedaje'
	}];
	this.programTypes = [{
		_id: 1,
		description: 'Programa Escolar'
	},{
		_id: 2,
		description: 'Programa de Adulto'
	}];
	this.programs = [{
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
	this.messageTypes = [{
		_id: 1,
		description: 'Correo'
	},{
		_id: 2,
		description: 'Teléfono'
	}];
	this.roles = [{
		_id: 1,
		description: 'Administrador'
	},{
		_id: 2,
		description: 'Staff'
	},{
		_id: 3,
		description: 'Voluntario'
	},{
		_id: 4,
		description: 'Estudiante'
	}];
	this.accessTypes = [{
		_id: 'public',
		description: 'Público'
	},{
		_id: 'all',
		description: 'Usuarios del Sistema'
	},{
		_id: 'role',
		description: 'Por Rol'
	},{
		_id: 'period',
		description: 'Por Periodo'
	},{
		_id: 'participantType',
		description: 'Por tipo de Participante'
	},{
		_id: 'programType',
		description: 'Por tipo de Programa'
	},{
		_id: 'country',
		description: 'Por País'
	},{
		_id: 'email',
		description: 'Por Usuario'
	}];
	this.types = [{
		id: 'text',
		description: 'Respuesta abierta'
	},{
		id: 'boolean',
		description: 'Si/No'
	},{
		id: 'number',
		description: 'Numérica'
	},{
		id: 'multiple',
		description: 'Selección Múltiple'
	}];
	return this;
});
