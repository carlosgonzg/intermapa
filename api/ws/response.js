'use strict';

var Response = require('../dto/response');
var util = require('../dto/util');

module.exports = function (prefix, app) {

	require('./crud')(prefix, app, Response);
}
