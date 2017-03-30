'use strict';

var News = require('../dto/news');
var util = require('../dto/util');

module.exports = function (prefix, app) {
	app.get("/news", function (req, res) {
		var obj = new News(app.db);
		obj.getNewsfeed({}).then(util.success(res), util.error(res));
	});
	app.get("/news/:id", function (req, res) {
		var obj = new News(app.db);
		var id = Number(req.params.id);
		obj.crud.find({ _id: id}).then(util.success(res), util.error(res));
	});
	app.get(prefix, function (req, res) {
		var obj = new News(app.db);
		obj.getNewsfeed(req.user || {}).then(util.success(res), util.error(res));
	});
	require('./crud')(prefix, app, News);
}
