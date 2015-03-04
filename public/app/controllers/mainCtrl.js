/**
 * This is the controller for index.html
 *
 * @author https: //github.com/lukemcfarlane
 * @date   March 2015 
 */
app.controller('MainCtrl', function($scope, $http) {
	$scope.isSaving = false;
	$scope.isError = false;

	$scope.newContact = {
	};

	$scope.save = function() {
		$scope.newContact = {};
	};

});