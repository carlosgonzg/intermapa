'use strict';

var Crud = require('./crud');
var Form = require('../dto/form');
var q = require('q');

function Response(db, userLogged) {
	this.crud = new Crud(db, 'RESPONSE', userLogged);
	this.db = db;
	this.userLogged = userLogged;
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
				required: false
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

Response.prototype.findByForm = function(id){
	var d = q.defer();
	var _this = this;
	_this.crud.find({ formId: id, 'asignee._id': _this.userLogged._id})
	.then(function(doc){
		if(doc.data.length > 0){
			doc.data[0].readOnly = doc.data[0].limit;
			d.resolve(doc);
		}
		else {
			var form = new Form(_this.db, _this.userLogged);
			form.crud.find({ _id: id })
			.then(function(doc){
				var newObj = doc.data[0];
				delete newObj._id;
				newObj.formId = id;
				newObj.asignee = {
					_id: _this.userLogged._id
				};
				_this.crud.insert(newObj)
				.then(function(doc){
					d.resolve({ data: [doc.data] });
				});
			});
		}
	}, function(error){
		d.reject(error);
	});
	return d.promise;
};
//Export
module.exports = Response;
