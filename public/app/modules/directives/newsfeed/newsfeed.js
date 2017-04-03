angular.module('IntermapaApp')
.directive('card', function () {
  	return {
	    templateUrl: 'modules/directives/newsfeed/newsfeed.html',
	    restrict: 'E',
	    scope:{
				ngModel: '='
		},
		controller: function ($scope, News, Form, Event, $location, $rootScope) {
			$scope.user = $rootScope.userData;
			$scope.goTo = function(obj){
				var nObj = {}
				if(obj.cardType == 'news'){
					nObj = new News(obj);
					nObj.goTo(true);
				}
				else if(obj.cardType == 'form'){
					$location.path('/response/' + obj._id);
				}
				else if(obj.cardType == 'event'){
					nObj = new Event(obj);
					nObj.goTo(true);
				}
			};
			$scope.saidYes = function(){
				new Event($scope.ngModel).saidYes()
				.then(function(){
					$scope.ngModel.rsvp.push($rootScope.user._id);
				});
			};
			$scope.saidNo = function(){
				new Event($scope.ngModel).saidNo()
				.then(function(){
					var index = -1;
					for(var i = 0; i < $scope.ngModel.rsvp.length; i++){
						if($scope.ngModel.rsvp[i] == $scope.user._id){
							$scope.ngModel.rsvp.splice(i, 1);
							break;
						}
					}
				});
			};
		}
	};
});