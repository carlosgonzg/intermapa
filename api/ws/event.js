'use strict';

var Event = require('../dto/event');
var util = require('../dto/util');

module.exports = function (prefix, app) {

	require('./crud')(prefix, app, Event);
}
