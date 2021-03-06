'use strict';
var d = require('domain').create();

d.on('error', function (er) {
	var error = {
		fecha : new Date(),
		mensaje : er.message,
		stack : er.stack
	};
	var fs = require('fs');
	var urlfs = __dirname + "/log/log-" + new Date().getFullYear() + "-" + (parseInt(new Date().getMonth()) + 1) + "-" + new Date().getDate() + ".txt";
	var txtError = "Fecha: " + error.fecha + ", Mensaje: " + error.mensaje + ", Stack: " + error.stack + "\n";
	fs.appendFile(urlfs, txtError, function (err) {
		if (err) {
			console.log(err);
		}
	});
	console.log('-----ERROR-----');
	console.log(er.stack);
	console.log('---------------');
});

d.run(function () {
	//Librerias
	var express = require('express');
	var auth = require('express-jwt');
	var http = require('http');
	var validator = require('express-validator');
	var path = require('path');
	var bodyParser = require('body-parser');
	var Config = require('./config');
	var mail = require('./api/mail');
	//Configuracion del server
	var app = express();
	var prefix = '/api';
	var secret = 'ElMundoDeberiaGirarPorSiempre2016!';
	app.use('/api', auth({
			secret : secret
		}));
	app.use(bodyParser.json({
			limit : '100mb'
		}));
	app.use(bodyParser.urlencoded({
			extended : true
		}));
	app.use(validator());
	//Inicializacion config y Mail
	var config = Config.init(app);
	mail.init(config);
	app.use('/', express.static(path.join(__dirname, config.PUBLIC_PATH)));
	app.use('/images', express.static(path.join(__dirname, 'files/images')));
	app.use('/images/logos', express.static(path.join(__dirname, 'files/images/logos')));
	app.use('/reports', express.static(path.join(__dirname, 'files/reports')));
	app.use('/components', express.static(path.join(__dirname, 'public/libraries')));
	app.use('/css', express.static(path.join(__dirname, 'public/css')));
	app.use('/fonts', express.static(path.join(__dirname, 'public/fonts')));
	//Configuracion db
	app.db = require('monk')(config.DB_URL);
	//WebAPI
	require('./api/ws/list')('/api/list', app, secret, config);
	require('./api/ws/role')('/api/role', app, secret, config);
	require('./api/ws/option')('/api/option', app, secret, config);
	require('./api/ws/roleOptions')('/api/roleoptions', app, secret, config);
	require('./api/ws/user')('/api/user', app, secret, config);
	require('./api/ws/event')('/api/event', app, secret, config);
	require('./api/ws/news')('/api/news', app, secret, config);
	require('./api/ws/form')('/api/form', app, secret, config);
	require('./api/ws/response')('/api/response', app, secret, config);
	//Inicializando Server
	http.createServer(app).listen(config.APP_PORT, function () {
		console.log("\n[*] Server Listening on port %d", config.APP_PORT);
	});
});
