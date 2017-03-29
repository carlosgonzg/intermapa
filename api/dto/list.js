'use strict';

var q = require('q');

function List(db) {
	//Listados
	this.phoneType = [{
		_id: 1,
		description: 'Casa'
	},{
		_id: 2,
		description: 'Móvil'
	},{
		_id: 3,
		description: 'Oficina'
	},{
		_id: 4,
		description: 'Otro'
	}
	];

};

List.prototype.getList = function(list){
	var d = q.defer();
	d.resolve(this[list] || []);
	return d.promise;
};
//Export
module.exports = List;