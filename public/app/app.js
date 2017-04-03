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
		'angularValidator',
		'ui.select',
		'textAngular'
	])
.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'modules/newsfeed/views/newsfeed.html',
		controller : 'NewsfeedCtrl',
		resolve:{
			news: function(News){
				return new News().find();
			}
		}
	})
	.when('/login', {
		templateUrl : 'modules/auth/views/login.html',
		controller : 'LoginCtrl',
		resolve: {
			changePassword: function(){
				return false;
			}
		}
	})
	.when('/users', {
		templateUrl : 'modules/user/views/userList.html',
		controller : 'UserListCtrl'
	})
	.when('/role', {
		templateUrl : 'modules/role/views/roleList.html',
		controller : 'RoleListCtrl'
	})
	.when('/option', {
		templateUrl : 'modules/role/views/optionList.html',
		controller : 'OptionListCtrl'
	})
	.when('/roleoptions', {
		templateUrl : 'modules/role/views/roleOptionsList.html',
		controller : 'RoleOptionListCtrl',
		resolve: {
			roles : function (Role) {
				return new Role().find({});
			},
			options : function (Option) {
				return new Option().find({});
			}
		}
	})
	.when('/user/:id?', {
		templateUrl : 'modules/user/views/user.html',
		controller : 'UserCtrl',
		resolve : {
			roles : function (Role) {
				return new Role().find({});
			},
			user : function (User, $route) {
				if ($route.current.params.id) {
					return new User().findById(parseInt($route.current.params.id));
				} else {
					return new User();
				}
			}
		}
	})
	.when('/changepassword/:token', {
		templateUrl : 'modules/auth/views/login.html',
		controller : 'LoginCtrl',
		resolve: {
			changePassword: function(){
				return true;
			}
		}
	})
	.when('/noaccess', {
		templateUrl : 'modules/auth/views/noaccess.html'
	})
	.when('/faq', {
		templateUrl : 'modules/other/views/faq.html'
	})
	.when('/contactus', {
		templateUrl : 'modules/other/views/contactus.html'
	})
	.when('/events', {
		templateUrl : 'modules/event/views/events.html',
		controller : 'EventsCtrl'
	})
	.when('/event/:id?', {
		templateUrl : 'modules/event/views/event.html',
		controller : 'EventCtrl',
		resolve : {
			event : function (Event, $route) {
				if ($route.current.params.id) {
					return new Event().findById(parseInt($route.current.params.id));
				} else {
					return new Event();
				}
			}
		}
	})
	.when('/news', {
		templateUrl : 'modules/newsfeed/views/news.html',
		controller : 'NewsCtrl'
	})
	.when('/new/:id?', {
		templateUrl : 'modules/newsfeed/views/new.html',
		controller : 'NewCtrl',
		resolve : {
			news : function (News, $route) {
				if ($route.current.params.id) {
					return new News().findById(parseInt($route.current.params.id));
				} else {
					return new News();
				}
			}
		}
	})
	.when('/forms', {
		templateUrl : 'modules/form/views/forms.html',
		controller : 'FormsCtrl'
	})
	.when('/form/:id?', {
		templateUrl : 'modules/form/views/form.html',
		controller : 'FormCtrl',
		resolve : {
			form : function (Form, $route) {
				if ($route.current.params.id) {
					return new Form().findById(parseInt($route.current.params.id));
				} else {
					return new Form();
				}
			}
		}
	})
	.when('/responses', {
		templateUrl : 'modules/form/views/responses.html',
		controller : 'ResponsesCtrl'
	})
	.when('/response/:id', {
		templateUrl : 'modules/form/views/response.html',
		controller : 'ResponseCtrl',
		resolve : {
			response : function (Response, $route) {
				var resp = new Response();
				return resp.findById(parseInt($route.current.params.id));
			}
		}
	})
	.otherwise({
		redirectTo : '/'
	});
});
