angular.module('IntermapaApp')
.directive('card', function () {
  	return {
	    templateUrl: 'modules/directives/newsfeed/newsfeed.html',
	    restrict: 'E',
	    scope:{
				ngModel: '='
		},
		controller: function ($scope, News, Form, Event, $location) {
			$scope.goTo = function(obj){
				var nObj = {}
				if(obj.cardType == 'news'){
					nObj = new News(obj)
				}
				else if(obj.cardType == 'form'){
					$location.path('form/' + obj._id);
				}
				else if(obj.cardType == 'event'){
					nObj = new Event(obj);
				}
				console.log(nObj)
				nObj.goTo(true);
			}
		}
	};
});