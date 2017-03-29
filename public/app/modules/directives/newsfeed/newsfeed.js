angular.module('IntermapaApp')
.directive('newsfeed', function () {
  return {
    templateUrl: 'views/directives/newsfeed.html',
    restrict: 'E',
    scope:{
			ngModel: '='
		},
		controller: function ($scope) {
			
    	}
    }
  };
});