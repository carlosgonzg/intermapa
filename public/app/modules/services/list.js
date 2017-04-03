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
		description: 'Participante de Intercambio'
	},{
		_id: 2,
		description: 'Participante de Hospedaje'
	}];
	this.programTypes = [{
		_id: 1,
		description: 'Programa Escolar'
	},{
		_id: 2,
		description: 'Programa SENTIO'
	}];
	this.programs = [{
		_id: 1,
		description: 'Universitario'
	},{
		_id: 2,
		description: 'Idiomas'
	},{
		_id: 3,
		description: 'Vocacional'
	},{
		_id: 4,
		description: 'Pasantía'
	},{
		_id: 4,
		description: 'Servicio Comunitario'
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
		description: 'Participante'
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
		description: 'Por Tipo de Participante'
	},{
		_id: 'programType',
		description: 'Por Programa General'
	},{
		_id: 'program',
		description: 'Por Programa SENTIO'
	},{
		_id: 'country',
		description: 'Por País'
	},{
		_id: 'task',
		description: 'Por Tarea'
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
	this.tasks = [{
		_id: 1,
		description: 'Reclutador de Familia'
	},{
		_id: 2,
		description: 'Entrevistador de Familia'
	},{
		_id: 3,
		description: 'Encargado de Registro'
	},{
		_id: 4,
		description: 'Promoción y Mercadeo'
	},{
		_id: 5,
		description: 'Mercadeo'
	},{
		_id: 6,
		description: 'Mentor'
	},{
		_id: 7,
		description: 'Voluntario de Soporte'
	},{
		_id: 8,
		description: 'Facilitadores'
	},{
		_id: 9,
		description: 'Monitores'
	},{
		_id: 10,
		description: 'Relación con los Centros Educativos'
	},{
		_id: 11,
		description: 'Desarrollador del Voluntariado'
	},{
		_id: 12,
		description: 'Junta Directiva'
	}];
	return this;
});
