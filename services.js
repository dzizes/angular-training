angular.module('angularTraining')
.service('restService', function($http){

	this.get = function(){
		return $http.get('http://192.168.1.13:3000/posts')
	}

	this.getUser = function(id){
		return $http.get('http://192.168.1.13:3000/users/' + id)
	}

	this.getToken = function(){
		return 1;
	}
})

angular.module('angularTraining')
.service('tokenService', function(){
	this.getToken = function(){
		return 1;
	}
})