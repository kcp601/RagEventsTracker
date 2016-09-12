angular.module('adventures').controller('EditAdventuresModalController', function($scope, $location, adventure, Authentication){
    $scope.authentication = Authentication;

    $scope.adventure = adventure;

    $scope.print = function() {
        console.log($scope.adventure);
    };

    $scope.save = function() {

        console.log($scope.adventure);

        $scope.adventure.$update(function() {
            $location.path('adventures/' + $scope.adventure._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    }
});