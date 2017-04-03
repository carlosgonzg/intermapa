'use strict';

var Response = require('../dto/response');

var util = require('../dto/util');

module.exports = function (prefix, app) {

	app.get(prefix + "/:id", function (req, res) {
		var obj = new Response(app.db, req.user);
		var id = Number(req.params.id);
		obj.findByForm(id)
		.then(util.success(res), util.error(res));
	});
	require('./crud')(prefix, app, Response);
}
