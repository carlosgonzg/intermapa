'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('OptionListCtrl', function ($scope, Option) {
	$scope.wsOption = Option;
	$scope.fields = [
		{title: 'Description', name: 'description', required: true, type: 'text'},
		{title: 'URL', name: 'url', required: true, type: 'text'},
		{title: 'Icon', name: 'icon', required: false, type: 'text'},
	];
});
