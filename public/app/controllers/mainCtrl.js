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
		Name: 'Luke'
	};

	$scope.save = function() {
		$scope.isSaving = true;
		$http.post('/contacts', $scope.newContact).then(function(res) {
			console.log('Received response: ', res);
			$scope.isSaving = false;
		});
		$scope.newContact = {};
	};

});