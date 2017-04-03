'use strict';

angular.module('IntermapaApp')
.factory('Event', function (Base, $location, $http, toaster, $q) {

	// Variable que se utiliza para comprobar si un objeto tiene una propiedad
	// var hasProp = Object.prototype.hasOwnProperty;

	// Nombre de la clase
	var Event;

	function Event(propValues) {
		Event.super.constructor.apply(this, arguments);
		this.baseApiPath = "/api/Event";
		this.access = this.access || ['public'];
		this.rsvp = this.rsvp || [];
	}
	var extend = function (child, parent) {
		var key;
		for (key in parent) {
			if (hasProp.call(parent, key)) {
				child[key] = parent[key];
			}
		}

		function Ctor() {
			this.constructor = child;
		}
		Ctor.prototype = parent.prototype;
		child.prototype = new Ctor();
		child.super = parent.prototype;
		return child;
	};
	// Extender de la clase Base
	extend(Event, Base);

	// Funcion que retorna las propiedades de una cuenta
	Event.properties = function () {
		var at = {};
		return at;
	};

	Event.prototype.goTo = function () {
		$location.path('/event/' + this._id);
	};

	Event.prototype.saidYes = function () {
		var d = $q.defer();
		var _this = this;
		$http.get(_this.baseApiPath + '/rsvp/' + _this._id + '/yes')
		.then(function (result) {
			toaster.success('', 'Gracias por responder! Apreciamos tu colaboración');
			d.resolve(true);
		},function (error) {
			toaster.warning('', 'Hubo un error al crear la confirmación, favor tratar más luego.');
			d.reject(error);
		});
		return d.promise;
	};

	Event.prototype.saidNo = function () {
		var d = $q.defer();
		var _this = this;
		$http.get(_this.baseApiPath + '/rsvp/' + _this._id + '/no')
		.then(function (result) {
			toaster.success('', 'Gracias por responder! Apreciamos tu colaboración');
			d.resolve(true);
		},function (error) {
			toaster.warning('', 'Hubo un error al negar la confirmación, favor tratar más luego.');
			d.reject(error);
		});
		return d.promise;
	};

	return Event;

});
