﻿'use strict';

angular.module('IntermapaApp')
.factory('Country', function (Base, $http) {

	// Variable que se utiliza para comprobar si un objeto tiene una propiedad
	// var hasProp = Object.prototype.hasOwnProperty;

	// Nombre de la clase
	var Country;

	function Country(propValues) {
		Country.super.constructor.apply(this, arguments);
		this.baseApiPath = "/api/country";
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
	extend(Country, Base);

	// Funcion que retorna las propiedades de una cuenta
	Country.properties = function () {
		var at = {};
		return at;
	};

	return Country;

});
