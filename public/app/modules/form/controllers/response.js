'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('ResponseCtrl', function ($scope, news) {
	$scope.news = news.data;
	console.log($scope.news)
});