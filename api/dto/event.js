'use strict';

var Crud = require('./crud');
var q = require('q');

function Event(db, userLogged) {
	this.crud = new Crud(db, 'EVENT', userLogged);
	this.db = db;
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
			},
			rsvp: {
				required: false
			}
		}
	};
	this.crud.schema = this.schema;
	this.crud.uniqueFields = [  ];
}

Event.prototype.saidYes = function(id, userId){
	var d = q.defer();
	var _this = this;
	_this.db.get('EVENT').update({ _id: Number(id) }, { $push: { rsvp: userId } })
	.then(function(doc){
		d.resolve(doc);
	}, function(err){
		console.log(err);
		d.reject(err);
	});
	return d.promise;
};
Event.prototype.saidNo = function(id, userId){
	var d = q.defer();
	var _this = this;
	_this.db.get('EVENT').update({ _id: Number(id) }, { $pull: { rsvp: userId } })
	.then(function(doc){
		d.resolve(doc);
	}, function(err){
		console.log(err);
		d.reject(err);
	});
	return d.promise;
};
//Export
module.exports = Event;
