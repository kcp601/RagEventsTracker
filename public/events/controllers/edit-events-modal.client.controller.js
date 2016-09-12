angular.module('events').controller('EditEventsModalController', function($scope, $location, event, Authentication){
    $scope.authentication = Authentication;

    $scope.event = event;

    $scope.print = function() {
        console.log($scope.event);
    };

    $scope.save = function() {

        console.log($scope.event);

        $scope.event.$update(function() {
            $location.path('events/' + $scope.event._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    }
});