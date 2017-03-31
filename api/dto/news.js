'use strict';

var Crud = require('./crud');
var q = require('q');
var _ = require('lodash');

function News(db, userLogged) {
	this.crud = new Crud(db, 'NEWS', userLogged);
	this.crudEvent = new Crud(db, 'EVENT', userLogged);
	this.crudForm = new Crud(db, 'FORM', userLogged);

	//DB Table Schema
	this.schema = {
		id : '/News',
		type : 'object',
		properties : {
			title : {
				type : 'string',
				required : true
			},
			body : {
				type : 'string',
				required : true
			},
			isMessage : {
				type : 'boolean',
				required : false
			},
			access : {
				type : 'array',
				required : true
			},
			photoUrl : {
				type : 'string',
				required : false
			}
		}
	};
	this.crud.schema = this.schema;
	this.crud.uniqueFields = [  ];
}

News.prototype.getNewsfeed = function(user){
	var d = q.defer();
	var _this = this;
	var query = {
		access: { 
			$in:['public'] 
		}
	};
	if(user !== undefined && user._id !== undefined){
		query.access.$in.push('all')
		//pongo todos los otros
		//pongo pais
		query.access.$in.push('role-' + user.role._id);
		query.access.$in.push('period-' + user.period._id);
		query.access.$in.push('participantType-' + user.participantType._id);
		query.access.$in.push('programType-' + user.programType._id);
		query.access.$in.push('country-' + user.entity.country._id);
		query.access.$in.push('email-' + user.account.email);
	}
	var output = [];
	_this.crud.find(query)
	.then(function(doc){
		output = output.concat(_.map(doc.data, function(obj){
			obj.cardType = 'news'
			return obj;
		}));
		return _this.crudEvent.find(query);
	})
	.then(function(doc){
		output = output.concat(_.map(doc.data, function(obj){
			obj.cardType = 'event'
			return obj;
		}));
		return _this.crudForm.find(query);
	})
	.then(function(doc){
		output = output.concat(_.map(doc.data, function(obj){
			obj.cardType = 'form'
			return obj;
		}));
		output.sort(function(a,b){
			return b.createdDate - a.createdDate;
		})
		var today = new Date();
		d.resolve({ 
			data: {
				now: _.filter(output, function(doc){ return doc.createdDate.getFullYear() == today.getFullYear() && doc.createdDate.getMonth() == today.getMonth() && doc.createdDate.getDate() == today.getDate(); }),
				past: _.filter(output, function(doc){ return !(doc.createdDate.getFullYear() == today.getFullYear() && doc.createdDate.getMonth() == today.getMonth() && doc.createdDate.getDate() == today.getDate()); })
			}
		});
	})
	.catch(function(err){
		d.reject(err);
	})
	return d.promise;
};
//Export
module.exports = News;
