'use strict';

var Event = require('../dto/event');
var util = require('../dto/util');

module.exports = function (prefix, app) {
	app.get(prefix + "/rsvp/:id/yes", function (req, res) {
		var obj = new Event(app.db, req.user);
		var id = Number(req.params.id);
		obj.saidYes(id, req.user._id).then(util.success(res), util.error(res));
	});
	app.get(prefix + "/rsvp/:id/no", function (req, res) {
		var obj = new Event(app.db, req.user);
		var id = Number(req.params.id);
		obj.saidNo(id, req.user._id).then(util.success(res), util.error(res));
	});
	require('./crud')(prefix, app, Event);
}
