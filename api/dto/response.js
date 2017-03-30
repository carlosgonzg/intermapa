'use strict';

var Crud = require('./crud');
var q = require('q');

function Response(db, userLogged) {
	this.crud = new Crud(db, 'RESPONSE', userLogged);

	//DB Table Schema
	this.schema = {
		id : '/Response',
		type : 'object',
		properties : {
			title : {
				type : 'string',
				required : true
			},
			limit: {
				type: 'int',
				required: true
			},
			questions : {
				type : 'array',
				required : true
			}
		}
	};
	this.crud.schema = this.schema;
	this.crud.uniqueFields = [  ];
}
//Export
module.exports = Response;
