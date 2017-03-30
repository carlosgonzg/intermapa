'use strict';

var Crud = require('./crud');
var q = require('q');

function Form(db, userLogged) {
	this.crud = new Crud(db, 'FORM', userLogged);

	//DB Table Schema
	this.schema = {
		id : '/Form',
		type : 'object',
		properties : {
			title : {
				type : 'string',
				required : true
			},
			limit: {
				type: 'boolean',
				required: false
			},
			questions : {
				required : false
			},
			access : {
				type : 'array',
				required : false
			}
		}
	};
	this.crud.schema = this.schema;
	this.crud.uniqueFields = [  ];
}
//Export
module.exports = Form;
