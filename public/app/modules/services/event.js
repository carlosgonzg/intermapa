'use strict';

angular.module('IntermapaApp')
.factory('Event', function (Base, $location) {

	// Variable que se utiliza para comprobar si un objeto tiene una propiedad
	// var hasProp = Object.prototype.hasOwnProperty;

	// Nombre de la clase
	var Event;

	function Event(propValues) {
		Event.super.constructor.apply(this, arguments);
		this.baseApiPath = "/api/Event";
		this.access = this.access || ['public'];
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

	return Event;

});
