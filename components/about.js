angular.module('angularTraining')
.controller('aboutCtrl', function($scope, restService){
	$scope.test = 'test about'
	//$scope.data = [{1: 'a', 2: 'b', 3: 'c'}, {1: 'aa', 2: 'bb', 3: 'cc'}, {1: 'aaa', 2: 'bbb', 3: 'ccc'}]

	restService.get().then(function(responseData){
		$scope.data = responseData.data;
	})

})
