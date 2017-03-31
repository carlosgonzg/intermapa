angular.module('IntermapaApp')
.directive('access', function () {
  	return {
	    templateUrl: 'modules/directives/access/access.html',
	    restrict: 'E',
	    scope:{
			ngModel: '='
		},
		controller: function ($scope, List) {
			$scope.list = List;
			$scope.ngModel = $scope.ngModel || [];
			$scope.newAccess = {};
			var types = {
				'role': 'roles',
				'periods': 'period',
				'participantType': 'participantTypes',
				'programType': 'programTypes',
				'country': 'countries'
			};
			$scope.addAccess = function(type, value){
				var accessKey = type.toString();
				if(['public', 'all'].indexOf(type) == -1){
					accessKey += '-' + value;
				}
				$scope.ngModel.push(accessKey);
				$timeout(function(){
					$scope.newAccess = {
						accessType: '',
						accessValue: ''
					};
					$scope.$apply();
				});
			};
			$scope.setAccessValue = function(type){
				$scope.newAccess.listValue = List[types[type]] || [];
			};
			$scope.getDescription = function(access){
				if(['public', 'all'].indexOf(access) != -1){
					return access == 'public' ? 'Público' : 'Usuarios del Sistema';
				}
				else {
					var type = access.split('-')[0];
					var value = access.split('-')[1];
					var selectedList = List[types[type]] || [];
					return _.filter(selectedList, function(doc){ return doc._id == value; })[0].description;
				}
			};
			$scope.getType = function(access){
				if(['public', 'all'].indexOf(access) != -1){
					return access;
				}
				else {
					return access.split('-')[0];
				}
			};
			$scope.removeAccess = function(index){
				$scope.ngModel.splice(index, 1);
			};
		}
	};
});