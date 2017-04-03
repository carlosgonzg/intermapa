angular.module('IntermapaApp')
.directive('question', function () {
	return {
		templateUrl : 'modules/directives/question/question.html',
		restrict : 'E',
		scope : {
			ngModel : '=',
			readOnly : '='
		},
		controller : function ($scope) {
			$scope.ngModel = $scope.ngModel || {};
		}
	};
});
