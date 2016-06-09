'use strict';

angular
  .module('angularTraining', ['ui.router', ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        //controller: 'MainCtrl',
        //controllerAs: 'main'
      }),
     $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl',
        controllerAs: 'about'
      })
      .state('user', {
      	url: '/user/:id',
      	templateUrl: 'views/user.html',
        controller: 'userCtrl',
        controllerAs: 'user'
      })
   	})
  .config(function http_configuration($httpProvider) {
  	$httpProvider.interceptors.push(function($q, tokenService) {
	  return {
	  	// optional method
	    'request': function(config) {
	      // do something on success
	       console.log('before rest call')
	       config.headers.token = tokenService.getToken()
	       debugger;
	      return config;
	    },

	    // optional method
	   'requestError': function(rejection) {
	      // do something on error
	      if (canRecover(rejection)) {
	        return responseOrNewPromise
	      }
	      return $q.reject(rejection);
	    },
	    // optional method
	    'response': function(response) {
	       console.log('after rest call')
		   debugger;
	      return response;
	    },

	    // optional method
	   'responseError': function(rejection) {
	      // do something on error
	      if (canRecover(rejection)) {
	        return responseOrNewPromise
	      }
	      return $q.reject(rejection);
	    }

	  };
	});
  })
  ;

