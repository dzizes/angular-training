angular.module('angularTraining')
.controller('userCtrl', function($scope, restService, $stateParams){
	
	restService.getUser($stateParams.id).then(function(responseData){
		$scope.data = responseData.data;
	})

})
