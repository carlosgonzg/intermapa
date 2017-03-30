'use strict';

var Form = require('../dto/form');
var util = require('../dto/util');

module.exports = function (prefix, app) {

	require('./crud')(prefix, app, Form);
}
