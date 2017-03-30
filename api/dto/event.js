'use strict';

var Crud = require('./crud');
var q = require('q');

function Event(db, userLogged) {
	this.crud = new Crud(db, 'EVENT', userLogged);

	//DB Table Schema
	this.schema = {
		id : '/Event',
		type : 'object',
		properties : {
			title : {
				type : 'string',
				required : true
			},
			date : {
				type : 'date',
				required : true
			},
			access : {
				type : 'array',
				required : true
			}
		}
	};
	this.crud.schema = this.schema;
	this.crud.uniqueFields = [  ];
}
//Export
module.exports = Event;
