'use strict';

angular.module('IntermapaApp')
.factory('News', function (Base, $rootScope, $location) {

	// Variable que se utiliza para comprobar si un objeto tiene una propiedad
	// var hasProp = Object.prototype.hasOwnProperty;

	// Nombre de la clase
	var News;

	function News(propValues) {
		News.super.constructor.apply(this, arguments);
		this.baseApiPath = $rootScope.userData._id !== undefined ? "/api/news" : "/news";
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
	extend(News, Base);

	// Funcion que retorna las propiedades de una cuenta
	News.properties = function () {
		var at = {};
		return at;
	};

	News.prototype.goTo = function (readOnly) {
		$location.path('/new/' + this._id).search({ read: readOnly ? '1':'0' });
	};

	return News;

});
