'use strict';

/**
 * @ngdoc function
 * @name IntermapaApp.controller:newsfeedCtrl
 * @description
 * # AboutCtrl
 * Controller of the IntermapaApp
 */
angular.module('IntermapaApp')
.controller('FormCtrl', function ($scope, form, toaster, $location, List) {
	$scope.form = form;
	var Question = function(){
		return {
			text: '',
			answers:[]
		}
	};
	var Answer = function(){
		return {
			text: ''
		}
	};
	$scope.list = List;

	$scope.shouldHaveMultipleAnswer = function(question){
		if(question && question.type){
			return ['multiple'].indexOf(question.type.id) != -1;
		}
		return false;
	};
	$scope.setAnswer = function(question){
		question.answers = [{
			text: ''
		}];
	};
	$scope.addQuestion = function(){
		$scope.form.questions.push(Question());
	};
	$scope.removeQuestion = function(index){
		$scope.form.questions.splice(index, 1);
	};
	$scope.addAnswer = function(parentIndex){
		$scope.form.questions[parentIndex].answers.push(Answer());
	};
	$scope.removeAnswer = function(parentIndex, index){
		$scope.form.questions[parentIndex].answers.splice(index, 1);
	};
	$scope.save = function () {
		$scope.form.save()
		.then(function (data) {
			toaster.success('El formulario fue guardado de manera exitosa');
			$location.path('forms');
		},
			function (error) {
			toaster.error('Error al guardar, favor intente mas tarde');
		});
	};
});