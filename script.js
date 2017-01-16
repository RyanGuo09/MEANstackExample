var	app = angular.module('Kevin',['ngRoute']);
	app.config(function ($routeProvider,$locationProvider) {
		// body...
		$routeProvider
			.when('/',{				

			templateUrl: 'home.html',
			controller:'HomeController',
		})
			.when('/signup',{				

			templateUrl: 'signup.html',
			controller:'SignupController',
		})

	})
	app.controller('HomeController', function ($scope,$http) {
					
					$scope.submitNewMeow = function(){
						$http.post('/meows',{newMeow: $scope.newMeow}).then(function(){
							getMeows();	
							$scope.newMeow =' ';
						});

					};
					$scope.removeMeow = function(meow) {
						$http.put('/meows/remove',{meow: meow}).then(function(){
							getMeows();	
							
						});
					};
					function getMeows(){
							$http.get('/meows').then(function(response){
							$scope.meows=response.data;
						
					});
					}
					getMeows();	

				});
	app.controller('SignupController', function ($scope,$http) {
		$scope.submitSignup = function () {
			// body...
			var newUser = {

				username: $scope.username,
				password: $scope.password
			};
			$http.post('/users',newUser).then(function () {
				// body...
				alert( "Success Sign up");
			});
		}
	});
