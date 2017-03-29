'use strict';

angular
.module('IntermapaApp', [
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'toaster',
		'ui.bootstrap',
		'dialogs.main',
		'angularValidator'
	])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'modules/newsfeed/views/newsfeed.html',
		controller : 'NewsfeedCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});
});
