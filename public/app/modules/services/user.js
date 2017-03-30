'use strict';

angular.module('IntermapaApp')
.factory('User', function (Base, $http, $q, $window, $rootScope, $location, dialogs, toaster, RoleOptions) {

	// Variable que se utiliza para comprobar si un objeto tiene una propiedad
	// var hasProp = Object.prototype.hasOwnProperty;

	// Nombre de la clase
	var User;

	function User(propValues) {
		User.super.constructor.apply(this, arguments);
		this.baseApiPath = "/api/user";
		this.account = this.account || {};
		this.role = this.role || null;
	}
	var extend = function (child, parent) {
		var key;
		for (key in parent) {
			if (hasProp.call(parent, key)) {
				child[key] = parent[key];
			}
		}

		function Ctor() {
			this.constructor = child;
		}
		Ctor.prototype = parent.prototype;
		child.prototype = new Ctor();
		child.super = parent.prototype;
		return child;
	};
	// Extender de la clase Base
	extend(User, Base);

	// Funcion que retorna las propiedades de una cuenta
	User.properties = function () {
		var at = {};
		return at;
	};

	User.prototype.getRoleOptions = function(){
		var d = $q.defer();
		var roleOptions = new RoleOptions();
		roleOptions.filter({ roleId: this.role._id})
		.then(function(result){
			result.data.sort(function(a, b){
				return a.sort - b.sort;
			});
			d.resolve(result.data);
		});
		return d.promise;
	};
	User.prototype.getAccessOfView = function (path) {
		var d = $q.defer();
		var roleOptions = new RoleOptions();
		if(!path){
			path = $location.path();
			path = '/' + path.split('/')[1];
		}
		var result = {
			read: false,
			write: false,
			delete: false,
			update: false
		};
		if(['/login', '/noaccess', '/', '/faq', '/contactus'].indexOf(path) == -1){
			var isHere = false;
			if($rootScope.roleOptions){
				$rootScope.roleOptions.forEach(function(rOption){
					if(rOption.option.url == path){
						result.read = rOption.read;
						result.write = rOption.write;
						result.delete = rOption.delete;
						result.update = rOption.update;
						isHere = true;
					}
				});
				if(!isHere){
					$location.path('/noaccess');
				}
			}
		}
		return result;
	};
	User.prototype.getActualUser = function () {
		var d = $q.defer();
		var _this = this;
		$http.get(_this.baseApiPath + '/actual')
		.then(function (result) {
			result = result.data;
			_this.assignProperties(result.data);
			$rootScope.userData = _this;
			$rootScope.isAuthenticated = true;
			$window.sessionStorage.isAuthenticated = true;
			$window.sessionStorage.user = JSON.stringify($rootScope.userData);
			_this.getRoleOptions()
			.then(function(rOptions){
				$rootScope.roleOptions = rOptions;
				d.resolve(_this);
			});
			
		},function (error) {
			d.reject(error);
		});
		return d.promise;
	};
	User.prototype.register = function () {
		var d = $q.defer();
		var _this = this;
		$http.post('/user/register', _this)
		.then(function (result) {
			result = result.data;
			_this.assignProperties(result.data);
			d.resolve(_this);
		},
		function (error) {
			d.reject(error);
		});
		return d.promise;
	};
	User.prototype.login = function () {
		var d = $q.defer();
		var _this = this;
		var query = {
			email : this.account.email,
			password : this.account.password
		};
		$http.post('/user/login', query)
		.then(function (result) {
			result = result.data;
			console.log(result)
			$window.sessionStorage.token = result.token;
			_this.getActualUser()
			.then(function (result) {
				console.log(result)
				d.resolve(result)
			},
				function (error) {
				toaster.error('', error.data.errors);
				d.reject(error);
			});
		},function (error) {
			toaster.error('', error.data.errors);
			d.reject(error);
		});
		return d.promise;
	};
	User.prototype.forgetPassword = function(){
		var _this = this;
		var dialog = dialogs.create('modules/auth/views/forgetPassword.html', 'ForgetPasswordCtrl');
		dialog.result.then(function (res) {
			$http.post('/user/forgetPassword', {
				email: res
			})
			.then(function(result){
				toaster.success('', 'El correo fue enviado exitosamente');
			},function (error) {
				console.log(error);
				toaster.error('', error.errors);
				d.reject(error);
			});
		}, function (res) {});
	};
	User.prototype.logout = function () {
		delete $rootScope.userData;
		delete $rootScope.isAuthenticated;
		delete $window.sessionStorage.token;
		delete $window.sessionStorage.user;
		delete $window.sessionStorage.isAuthenticated;
		$location.path('/login');
	};
	User.prototype.goTo = function () {
		$location.path('/user/' + this._id);
	};
	User.prototype.miniUser = function(){
		var user = angular.copy(this);
		delete user.account.password;
		return user;
	};
	return User;
});
