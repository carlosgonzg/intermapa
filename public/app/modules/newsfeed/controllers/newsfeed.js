'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('NewsfeedCtrl', function ($scope, news) {
	$scope.news = news.data;
	$scope.isToday = function(createdDate){
		var today = new Date();
		return createdDate.getFullYear() == today.getFullYear() && createdDate.getMonth() == today.getMonth() && createdDate.getDate() == today.getDate()
	};
});