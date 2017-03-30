'use strict';

angular.module('IntermapaApp')
.factory('Form', function (Base, $rootScope, $location) {

	// Variable que se utiliza para comprobar si un objeto tiene una propiedad
	// var hasProp = Object.prototype.hasOwnProperty;

	// Nombre de la clase
	var Form;

	function Form(propValues) {
		Form.super.constructor.apply(this, arguments);
		this.baseApiPath = "/api/form";
		this.access = this.access || ['public'];
		this.questions = this.questions || [];
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
	extend(Form, Base);

	// Funcion que retorna las propiedades de una cuenta
	Form.properties = function () {
		var at = {};
		return at;
	};

	Form.prototype.goTo = function () {
		$location.path('/form/' + this._id);
	};

	return Form;

});
