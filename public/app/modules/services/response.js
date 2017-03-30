'use strict';

angular.module('IntermapaApp')
.factory('Response', function (Base, $rootScope, $location) {

	// Variable que se utiliza para comprobar si un objeto tiene una propiedad
	// var hasProp = Object.prototype.hasOwnProperty;

	// Nombre de la clase
	var Response;

	function Response(propValues) {
		Response.super.constructor.apply(this, arguments);
		this.baseApiPath = "/api/response";
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
	extend(News, Base);

	// Funcion que retorna las propiedades de una cuenta
	Response.properties = function () {
		var at = {};
		return at;
	};

	Response.prototype.goTo = function (readOnly) {
		console.log(readOnly)
		$location.path('/response/' + this._id).search({ read: readOnly ? '1':'0' });
	};

	return Response;

});
